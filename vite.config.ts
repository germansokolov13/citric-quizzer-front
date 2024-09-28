import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
// import libCss from 'vite-plugin-libcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // libCss(),
    react(),
  ],
});
