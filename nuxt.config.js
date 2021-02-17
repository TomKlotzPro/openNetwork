import redirectSSL from "redirect-ssl";
export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  //mode: "universal",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Open Network | Knowledge Endpoint",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "Open Network | Knowledge Endpoint"
      },
      {
        hid: "og:url",
        name: "og:url",
        content: process.env.BASE_URL || "http://localhost:300"
      },
      {
        hid: "og:description",
        name: "og:description",
        content: process.env.npm_package_description
      },
      {
        hid: "og:image",
        name: "og:image",
        content:
          "https://opntwk-project-images.s3-eu-west-1.amazonaws.com/meta_image.png"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src: "https://kit.fontawesome.com/6f67b3e9f1.js"
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["~assets/css/tailwind.css", "@/assets/css/_index.scss"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: "~/plugins/vuelidate" },
    { src: "~/plugins/filters" },
    { src: "~/plugins/integrations" },
    { src: "~/plugins/tooltip" },
    { src: "~/plugins/toasted", ssr: false },
    { src: "~/plugins/paginate", ssr: false },
    { src: "~/plugins/form_wizard" },
    { src: "~/plugins/vue-instantsearch" }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/tailwindcss",
    [
      "@nuxtjs/google-analytics",
      {
        id: process.env.GOOGLE_ANALYTICS_UA_ID
      }
    ]
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
        "Hind:400,400italic,500,500italic,700,700italic",
        "Poppins:400,400italic,500,500italic,600,600italic,700,700italic",
        "Ubuntu:400,500"
      ]
    }
  },
  /**
   * Axios module configuration
   */
  axios: {
    baseURL: process.env.BASE_URL || "http://localhost:3000"
  },

  // Server Middleware
  serverMiddleware: [
    "~/server/routes/index.js",
    redirectSSL.create({
      enabled: process.env.NODE_ENV === "production"
    }),
    { path: "/", handle: "~/server/routes/swagger.js" }
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ["vue-instantsearch", "instantsearch.js/es"]
  }
};
