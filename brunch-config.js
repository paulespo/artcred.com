// See http://brunch.io for documentation.
module.exports = {
  files: {
    stylesheets: { joinTo: 'style.css' },
  },
  plugins: {
    postcss: {
      processors: [
        require('postcss-simple-vars'),
        require('postcss-normalize'),
        require('autoprefixer')
      ]
    }
  },
  paths: {
    watched: ['src'],
    public: 'build'
  }
};
