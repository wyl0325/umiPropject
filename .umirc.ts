import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
    { path: "/table", component: "table" },
  ],
  npmClient: 'yarn',
  plugins: ['@umijs/plugins/dist/dva'],
  dva:{},
});
