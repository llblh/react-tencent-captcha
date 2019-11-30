module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'RTCaptcha',
      externals: {
        react: 'React'
      }
    }
  }
}
