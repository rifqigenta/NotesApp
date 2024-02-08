import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     "/register": {
  //       target: "https://62.72.13.124/api",
  //       changeOrigin: false,
  //       secure: false,
  //     },
  //   },
  // },
});
