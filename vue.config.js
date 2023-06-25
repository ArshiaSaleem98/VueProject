module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://134.122.96.252:15500/',
        changeOrigin: true,
      },
    },
  },
  transpileDependencies: true,
};
