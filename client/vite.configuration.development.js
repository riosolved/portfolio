import { defineConfig } from "vite";
import dotenv from 'dotenv';

export default defineConfig({
  plugins: [
    {
      // NOTE : RELOAD THE VITE SERVER ON COMPILED TAILWIND CSS
      name: '@tailwindcss/cli.reload',
      configureServer(server) {
        server.watcher.on('change', (file) => {
          if (file.endsWith('/public/index.css')) {
            console.log('public/index.css changed, reloading...');
            server.ws.send({
              type: 'full-reload',
            });
          }
        });
      },
    },
    {
      name: 'env.inject',
      config({ mode }) {
        let file;

        switch (mode) {
          case 'development': {
            file = '.env.development';
            break;
          }
          case 'production': {
            file = '.env.development';
            break;
          }
          default: {
            file = '.env';
            break;
          }
        }

        return {
          define: {
            '__environment_variables__': dotenv.config({ path: file }).parsed,
          },
        }
      }
    }
  ],
  server: {
    port: 3000,
    watch: {
      usePolling: true,
    },
  },
});
