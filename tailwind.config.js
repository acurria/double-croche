/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#111111',
                'secondary': '#AB731F',
                'black': '#000000',
                'white': '#FFFFFF',
                'black-opacity-700': 'rgba(0, 0, 0, 0.7)'
            },
            fontFamily: {
                sans: ['Kanit', 'sans-serif']
            },
        },
    },
    plugins: [],
}
