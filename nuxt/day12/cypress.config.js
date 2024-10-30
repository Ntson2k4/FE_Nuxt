import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "wiv7ad",

  e2e: {
    setupNodeEvents(on, config) {
      // Thêm các sự kiện hoặc plugins nếu cần
    },
    baseUrl: "http://localhost:3000", // Đảm bảo đây là URL chạy Nuxt
  },
  
  component: {
    devServer: {
      framework: "nuxt",
      bundler: "webpack",
    },
  },
});
