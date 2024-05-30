const withTM = require('next-transpile-modules')(['@mui/x-charts']); // Ajoutez d'autres modules si nécessaire

module.exports = withTM({
  reactStrictMode: true,
});
