import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  // Strip debug logging from production bundles while keeping console.error.
  esbuild: {
    pure: ['console.log', 'console.info', 'console.debug'],
  },

  build: {
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        // Split heavy, rarely-changing vendor code into their own long-cacheable
        // chunks so a route that never touches them never pays their download cost.
        // (Function form so react/jsx-runtime lands with react, not with framer-motion.)
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined;
          if (
            id.includes('/react-dom/') ||
            id.includes('/react-router') ||
            id.includes('/react/') ||
            id.includes('/scheduler/')
          ) {
            return 'react-vendor';
          }
          if (id.includes('framer-motion') || id.includes('motion-dom') || id.includes('motion-utils')) {
            return 'motion';
          }
          if (id.includes('/gsap/')) return 'gsap';
          if (id.includes('/ogl/')) return 'ogl';
          return undefined;
        },
      },
    },
  },
});
