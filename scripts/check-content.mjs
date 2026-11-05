import { readContent } from './content.mjs';

try {
  readContent();
  console.log('content.json is valid.');
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
