/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    standard: '#ff7723'
                },
                secondary: {
                    standard: '#4488ff',
                    light: '#e5efff'
                },
                neutral: {
                    standard: '#8d8d8d',
                    dark: '#606060'
                },
                disabled: '#a9a9a9',
                error: '#c1121f',
                on: {
                    primary: '#ffffff',
                    secondary: '#ffffff',
                    container: '#ffffff'
                }
            },
            fontFamily: {
                'sans': ['Noto Sans KR', ...defaultTheme.fontFamily.sans]
            },
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
