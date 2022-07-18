const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.vue',
    ],
    darkMode: 'media',

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
                ibm: "IBM Plex Sans Arabic",
                noto: "Noto Nastaliq Urdu",
                vaizir: "Vazirmatn",
            },
        },
    },

};
