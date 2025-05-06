import { defineConfig } from "vite";
import dotenv from 'dotenv';

export default defineConfig({
  plugins: [
    {
      name: 'env.inject',
      config() {
        return {
          define: {
            '__environment_variables__': dotenv.config({ path: '.env.production' }).parsed,
          },
        }
      }
    }
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});
