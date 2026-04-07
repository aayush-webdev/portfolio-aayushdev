import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split heavy 3D libraries into separate cacheable chunks
          "vendor-three": ["three", "three-stdlib"],
          "vendor-r3f": [
            "@react-three/fiber",
            "@react-three/drei",
            "@react-three/postprocessing",
          ],
          "vendor-rapier": ["@react-three/rapier"],
          "vendor-gsap": ["gsap", "gsap-trial"],
        },
      },
    },
  },
});
