module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        title: 'AIConverter',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'A Unit Converter project'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    /*
    ** Customize the progress bar color
    */
    loading: {color: '#3B8070'},
    /*
    ** Build configuration
    */
    build: {

        vendor: ['vue-color', 'vue-json-tree-view', 'vue-highlightjs', 'vue-codemirror'],

        extractCSS: true,

        postcss: {
            plugins: {
                'postcss-custom-properties': false
            }
        },

        /*
        ** Run ESLint on save
        */
        extend(config, {isDev, isClient}) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    },
    css: [
        '@/assets/_app.scss',
        'buefy/lib/buefy.css',
        'codemirror/lib/codemirror.css',
        // merge css
        'codemirror/addon/merge/merge.css',
        // theme css
        'codemirror/theme/base16-dark.css',
    ],

    modules: [
        // Simple usage
        'nuxt-buefy',
        '@nuxtjs/axios',
        'nuxt-robots-module',

    ],
    plugins: [
        '~plugins/component.js',
        {src: '~plugins/nuxt-codemirror-plugin.js', ssr: false},
        {src: '~plugins/ga.js', ssr: false},
        {src: '~plugins/dpi.js', ssr: false}
    ],

    'nuxt-robots-module': [
        {
            UserAgent: '*',
        },
    ],

}
