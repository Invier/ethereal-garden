import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function getFileContent(filePath: string): Promise<string> {
  const fileBuffer = await fs.readFile(`${__dirname.replace('\\internal\\utils', '')}${filePath}`);
  return fileBuffer.toString('utf8');
}
