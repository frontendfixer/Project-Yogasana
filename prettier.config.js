/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options} */
module.exports = {
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  arrowParens: 'avoid',
  tailwindFunctions: ['cn'],
  plugins: ['prettier-plugin-tailwindcss'],
};
