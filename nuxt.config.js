const { resolve } = require('path')
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: '艾瑞克是羊',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0 ,maximum-scale=1.0,userscalable=no' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'ant-design-vue/dist/antd.css',
    'hover.css/css/hover.css',
    'assets/css/index.css',
    'mavon-editor/dist/css/index.css',
    'animate.css/animate.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/antd-ui',
    '@/plugins/axios',
    '@/plugins/svg'
  ],

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  /*
**axios
*/
  axios: {
    proxy: true,
  },
  /*
  ** proxy
  */
  proxy: {
    '/api': {
      target: 'http://localhost:3000/api',
      pathRewrite: {
        '^/api': ''
      }
    }
  },
  server: {
    port: 3001,
    host: 'localhost'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
      svgRule.exclude = [resolve(__dirname, 'assets/svg')]

      // svg 加载
      config.module.rules.push({
        test: /\.svg$/,
        include: [resolve(__dirname, 'assets/svg')],
        loader: 'svg-sprite-loader'
      })
    }
  }
}
