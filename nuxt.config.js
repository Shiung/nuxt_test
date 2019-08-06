
module.exports = {
  mode: 'universal', //'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#f00' },
  // 僅限spa 模式使用
  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: '#f00'
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/core-components.js',
    '~plugins/data-filter.js',
    '~plugins/axios.js'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  axios: {
    baseURL: 'https://nuxt-learn2-api.firebaseio.com',
    credentials: false // auth驗證 cookie
  },
  styleResources: {
    scss: [
      './assets/scss/_variables.scss'
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  // rootDir: '/my-app/'
  // srcDir: 'client/'
  // server 環境
  // server: {
  //   port: 8000, // default: 3000
  //   host: '0.0.0.0', // default: localhost
  // },
  // router 客製化
  router: {
    middleware: 'log', // meddleware 可以放在 每頁page 或是 layout / router 他會多次呼叫
    // base: '/my-app/' // 設定sub-domain
    // extendRoutes (routes, resolve) {
    //   routes.push({
    //     name: '',
    //     path: '',
    //     component: resolve(__dirname, '')
    //   })
    // }
  }
}
