module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',          // Applies to all files in src folder
    './src/components/**/*.{js,jsx,ts,tsx}', // Applies specifically to all files in src/components
    'node_modules/daisyui/**/*.js',        // Applies to all JS files in the daisyui package
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/src/Resources/Landingbgbubble.svg')"
      },
      fontFamily: {
        guerrilla: ['ProtestGuerrilla','sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        'text-shadow': '5px 5px 15px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [require('daisyui')],
};

