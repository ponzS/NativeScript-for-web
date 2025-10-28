/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{css,vue,ts,tsx}"],
  // use the .ns-dark class to control dark mode (applied by NativeScript) - since 'media' (default) is not supported.
  darkMode: ["class", ".ns-dark"],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false, // disables browser-specific resets
  },
};
