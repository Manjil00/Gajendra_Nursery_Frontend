/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
    extend: {
        fontFamily: {
        LogoFont: "'Tai Heritage Pro', serif;",
        writingFont:"'Lato', sans-serif;"
        },
        keyframes:{
            'word-rotate':{
                '0%,100%':{opacity:'0'},
                '50':{opacity:'1'},
            },
        },
        animation: {
        'bounce-slow': 'bounce 2s linear infinite',
        'word-rotate':'blinking-cursor 0.8s cubic-bezier(0.68, 0.01, 0.01, 0.99) infinite'
        },
        colors:{
            bgcolor: '#D9D9D9',
        }
    },
    },
    plugins: [],
}
