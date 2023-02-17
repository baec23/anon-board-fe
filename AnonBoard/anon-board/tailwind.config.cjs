/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            transitionProperty: {
                height: 'height',
                maxHeight: 'max-height'
            },
            keyframes: {
                scaleInY: {
                    '0%': {transform: 'scaleY(0)', maxHeight: '0px', opacity: '0', visibility: 'hidden'},
                    '100%': {transform: 'scaleY(1)', maxHeight: '50vh', opacity: '1', visibility: 'visible'}
                },
                scaleOutY:{
                    '0%': {transform: 'scaleY(1)', maxHeight:'50vh', opacity: '1', visibility: 'visible'},
                    '100%': {transform: 'scaleY(0)', maxHeight:'0px', opacity: '0', visibility: 'hidden'}
                }
            },
            animation: {
                scaleInY: 'scaleInY 0.3s forwards',
                scaleOutY: 'scaleOutY 0.3s forwards'
            },
        },
    },
    plugins: [],
}
