import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/react_static-list-of-todos/', // nome do repositório no GitHub
  plugins: [react()],
  server: {
    port: 3000,
  },
});
