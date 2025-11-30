import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'src/index.html',
        category: 'src/category.html',
        test: 'src/test.html',
      },
    },
  },
});
