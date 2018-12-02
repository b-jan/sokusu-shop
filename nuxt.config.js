import client from "./sanity.js"

export default {
  head: {
    title: "Sokusu",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Socks that don't suck"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      // Snipcart styling
      {
        href: "https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css",
        type: "text/css",
        rel: "stylesheet"
      }
    ],
    script: [
      // jQuery. Only needed for snipcart
      { src: "https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js" },
      // Snipcart js
      {
        src: "https://cdn.snipcart.com/scripts/2.0/snipcart.js",
        id: "snipcart",
        "data-autopop": "false",
        "data-api-key":
          "NmU0ZDM0NmUtMDUyNC00OGU0LTkzZTQtZWZjYzZlYzhiZWIyNjM2NzUxMTk2ODU0Mjc4ODU5"
      }
    ]
  },
  loading: { color: "#005B56" },
  plugins: [
    { src: "~plugins/crisp.js", ssr: false },
    "~/plugins/globalData",
    "~/plugins/scrollto"
  ],
  modules: [
    [
      'nuxt-sass-resources-loader',
      [
        './assets/style/variables.scss',
      ]
    ],
    [
      'nuxt-mq',
      {
        // Default breakpoint for SSR
        defaultBreakpoint: 'default',
        breakpoints: {
          sm: 600,
          md: 1200,
          lg: Infinity
        }
      }
    ]
  ],
  css: ["~/assets/style/main.css"],
  router: {
    linkExactActiveClass: 'active-link'
  },
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ["script", "style", "font"].includes(type)
      }
    }
  },
  build: {
    postcss: [require("postcss-cssnext")()],
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    routes: async function() {
      const paths = await client.fetch(`{
        "product": *[_type == "product"].slug.current,
        "category": *[_type == "category"].slug.current,
        "vendor": *[_type == "vendor"].slug.current
      }`)
      return Object.keys(paths).reduce(
        (acc, key) => [
          ...acc,
          ...paths[key].reduce((acc, curr) => [...acc, `${key}/${curr}`], [])
        ],
        []
      )
    }
  },
  analyze: true
}
