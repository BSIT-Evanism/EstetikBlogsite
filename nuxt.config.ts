// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/devtools',
        '@unocss/nuxt',
      ],
      unocss: {
        // presets
        uno: true, // enabled `@unocss/preset-uno`
        icons: true, // enabled `@unocss/preset-icons`
        attributify: true, // enabled `@unocss/preset-attributify`,
    
        // core options
        shortcuts: [],
        rules: [],
      },

})
