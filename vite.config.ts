import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const rootDir = path.resolve(__dirname, `src`);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: `@apis`,
        replacement: path.resolve(rootDir, `apis`),
      },
      {
        find: `@assets`,
        replacement: path.resolve(rootDir, `assets`),
      },
      {
        find: `@components`,
        replacement: path.resolve(rootDir, `components`),
      },
      {
        find: `@pages`,
        replacement: path.resolve(rootDir, `pages`),
      },
      {
        find: `@routes`,
        replacement: path.resolve(rootDir, `routes`),
      },
      {
        find: `@styles`,
        replacement: path.resolve(rootDir, `styles`),
      },
      {
        find: `@utils`,
        replacement: path.resolve(rootDir, `utils`),
      },
    ],
  },
});
