import path from "path";
import { defineNuxtConfig } from "@nuxt/bridge";
import fs from "fs-extra";

export default defineNuxtConfig({
  bridge: false,
  typescript: true,
  // Global page headers: https://go.nuxtjs.dev/config-head\
  // hooks: {
  //   build: {
  //     before() {
  //       const srcDir = path.resolve(
  //         __dirname,
  //         "node_modules/@tria-sdk/authenticate-web/dist"
  //       );
  //       const destDir = path.resolve(__dirname, "static/@tria-sdk");
  //       // Remove the destination directory if it exists
  //       fs.removeSync(destDir);
  //       // Copy the source directory to the destination
  //       fs.copySync(srcDir, destDir);
  //     },
  //   },
  // },
  head: {
    title: "nuxt-legacy-js",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],

    script: [
      // {
      //   src: "@tria-sdk/index.es.js",
      //   type: "module",
      // },
    ],
  },
  plugins: [{ src: "~/plugins/auth-manager.js", mode: "client" }],
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // "@nuxtjs/composition-api/module"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // transpile: ["@tria-sdk/connect"],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [
        "@babel/plugin-proposal-nullish-coalescing-operator",
        "@babel/plugin-proposal-optional-chaining",
      ],
    },

    // If you need to transpile the @tria-sdk/authenticate-web package
    transpile: ["@tria-sdk/authenticate-web"],
  },
});
