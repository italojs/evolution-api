import { cpSync } from 'node:fs';

import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src'],
  outDir: 'app',
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: true,
  format: ['cjs', 'esm'],
  onSuccess: async () => {
    cpSync('src/utils/translations', 'app/translations', { recursive: true });
  },
  loader: {
    '.json': 'file',
  },
});
