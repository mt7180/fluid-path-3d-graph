import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/fluid-path-3d-graph/',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
