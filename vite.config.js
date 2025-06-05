import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/auto-refinance-demo/' // 👈 important for GitHub Pages
});
