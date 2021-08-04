module.exports = {
  future: {
    strictPostcssConfiguration: true
  },

  // webpack: (config, { dev, isServer }) => {
  //   // Replace React with Preact only in client production build
  //   // https://github.com/leerob/leerob.io/blob/main/next.config.js#L26-L37
  //   if (!dev && !isServer) {
  //     Object.assign(config.resolve.alias, {
  //       react: 'preact/compat',
  //       'react-dom/test-utils': 'preact/test-utils',
  //       'react-dom': 'preact/compat'
  //     })
  //   }

  //   return config
  // }
}
