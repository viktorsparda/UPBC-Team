import { promises as fs } from 'fs';
import path from 'path';

const projectRoot = path.resolve('./');
const pagesDir = path.join(projectRoot, 'src', 'pages');

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

async function normalizeScripts(filePath) {
  const original = await fs.readFile(filePath, 'utf8');
  const updated = original
    .replace(/src="%BASE_URL%src\/main\.js"/g, 'src="/src/main.js"')
    .replace(/src="%BASE_URL%src\/pages\//g, 'src="/src/pages/');

  if (updated !== original) {
    await fs.writeFile(filePath, updated, 'utf8');
    console.log(`Normalized scripts in ${path.relative(projectRoot, filePath)}`);
  }
}

(async () => {
  try {
    const htmlFiles = await collectHtmlFiles(pagesDir);
    await Promise.all(htmlFiles.map(normalizeScripts));
  } catch (error) {
    console.error('Error normalizing module scripts:', error);
    process.exitCode = 1;
  }
})();
