export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  mode: "universal",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: "Open Network",
    title: "Open Network",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["~assets/css/tailwind.css"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {src: '~/plugins/vuelidate'},
    {src: '~/plugins/filters'},
    {src: '~/plugins/toasted', ssr:false},
    {src: '~/plugins/form_wizard'}
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/tailwindcss"
  ],

  // Defaults options
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
    exposeConfig: false,
    config: {}
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ["@nuxtjs/axios", "nuxt-webfontloader", "@nuxtjs/svg"],

  webfontloader: {
    google: {
      families: [
        "Hind:400,500,700",
        "Poppins:400,500,600,700",
        "Ubuntu:400,500"
      ]
    }
  },

  // Server Middleware
  serverMiddleware: ["~/server/routes/index.js"],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
