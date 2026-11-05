import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { validateContent } from '../src/content-validation.js';

export const contentPath = fileURLToPath(new URL('../content.json', import.meta.url));

export function readContent() {
  let content;
  try {
    content = JSON.parse(readFileSync(contentPath, 'utf8'));
  } catch (error) {
    throw new Error(`Cannot read content.json. Check the quotation marks and commas. ${error.message}`);
  }
  return validateContent(content);
}
