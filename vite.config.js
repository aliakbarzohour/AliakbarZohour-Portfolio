
import { defineConfig } from 'vite'
import { VitePWA } from "vite-plugin-pwa";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",

  plugins: [react(), VitePWA({
    registerType: "prompt",
    includeAssets: ["favicon.ico", "apple-touch-icon.png"],
    manifest: {
      name: "Aliakbar Zohour",
      short_name: "Aliakbar Zohour",
      description: " A software engineer helping startups turn their visions into a digital reality. I specialize in designing and building modern mobile and web-based apps.",
      theme_color: "#0d0d0d",
      background_color: "#0d0d0d",
      display: "standalone",
      scope: "/",
      start_url: "/",
      orientation: 'portrait',
    }
  })],

  build: {
    sourcemap: true
  }
});