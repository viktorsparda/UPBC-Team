import { promises as fs } from 'fs';
import path from 'path';

const projectRoot = path.resolve('./');
const pagesDir = path.join(projectRoot, 'src', 'pages');

const replacements = [
  { pattern: /href="\/favicon\.ico"/g, replacement: 'href="%BASE_URL%favicon.ico"' },
  { pattern: /href="\/assets\//g, replacement: 'href="%BASE_URL%assets/' },
  { pattern: /href="\/vendor\//g, replacement: 'href="%BASE_URL%vendor/' },
  { pattern: /src="\/assets\//g, replacement: 'src="%BASE_URL%assets/' },
  { pattern: /src="\/vendor\//g, replacement: 'src="%BASE_URL%vendor/' },
  { pattern: /data-src="\/assets\//g, replacement: 'data-src="%BASE_URL%assets/' },
  { pattern: /poster="\/assets\//g, replacement: 'poster="%BASE_URL%assets/' },
  { pattern: /href="\/src\/pages\//g, replacement: 'href="%BASE_URL%src/pages/' },
  { pattern: /src="\/src\/pages\//g, replacement: 'src="%BASE_URL%src/pages/' },
  { pattern: /src="\/src\/main\.js"/g, replacement: 'src="%BASE_URL%src/main.js"' }
];

async function collectHtmlFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      return collectHtmlFiles(fullPath);
    }
    if (entry.isFile() && entry.name.endsWith('.html')) {
      return [fullPath];
    }
    return [];
  }));
  return files.flat();
}

async function processFile(filePath) {
  const original = await fs.readFile(filePath, 'utf8');
  let updated = original;
  replacements.forEach(({ pattern, replacement }) => {
    updated = updated.replace(pattern, replacement);
  });

  if (updated !== original) {
    await fs.writeFile(filePath, updated, 'utf8');
    console.log(`Updated ${path.relative(projectRoot, filePath)}`);
  }
}

(async () => {
  try {
    const htmlFiles = await collectHtmlFiles(pagesDir);
    await Promise.all(htmlFiles.map(processFile));
  } catch (error) {
    console.error('Error fixing base paths:', error);
    process.exitCode = 1;
  }
})();
