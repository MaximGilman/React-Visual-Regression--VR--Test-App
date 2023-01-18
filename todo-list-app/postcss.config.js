module.exports = {
  syntax: 'postcss-scss',

  plugins: [
    require('postcss-bem-fix')({
      style: "bem",
      separators: {
        descendent: "__",
      },
      shortcuts: {
        component: "b",
        descendent: "e",
        modifier: "m",
      },
    }),
   
    require("autoprefixer")({
      /* ...options */
    }),
  ],
};
