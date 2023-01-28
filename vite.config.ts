import { defineConfig } from "vite";
import { resolve } from 'path';
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    target: 'esnext',
    lib: {
      name: "clock-component",
      fileName: 'clock',
      entry: resolve(__dirname, 'src/index.ts') ,
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      external: /^lit/
    }
  },
  plugins: [dts()],
});
