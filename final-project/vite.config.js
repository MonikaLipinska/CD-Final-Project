import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:3000,
    open: true,
    host: true,

    setup: (server) => {
      server.middlewares.use((req, res, next) => {
        try {
          decodeURI(req.url);
        } catch (error) {
          console.error("Invalid URI: ", req.url);
        }
        next();
      });
    }
  }
});