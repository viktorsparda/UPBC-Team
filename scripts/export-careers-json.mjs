import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

import { glob } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const careersDir = join(__dirname, '..', 'src', 'content', 'careers');
const files = await glob('*.json', { cwd: careersDir, absolute: true });

if (!files.length) {
  console.warn('No career JSON files found.');
  process.exit(0);
}

const requiredFields = ['slug', 'name', 'category'];
const seenSlugs = new Set();

for (const filePath of files) {
  const raw = await readFile(filePath, 'utf8');
  const data = JSON.parse(raw);

  for (const field of requiredFields) {
    if (!data[field]) {
      throw new Error(`Missing required field "${field}" in ${filePath}`);
    }
  }

  if (seenSlugs.has(data.slug)) {
    throw new Error(`Duplicate slug detected: ${data.slug}`);
  }
  seenSlugs.add(data.slug);
}

console.log(`Validated ${files.length} career entries. All required fields present and slugs are unique.`);
