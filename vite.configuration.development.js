import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    {
      // NOTE : RELOAD THE VITE SERVER ON COMPILED TAILWIND CSS
      name: '@tailwindcss/cli::reload',
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
  ],
  server: {
    port: 3000,
    watch: {
      usePolling: true,
    },
  },
});
