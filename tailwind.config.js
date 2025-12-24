/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Inter"', 'sans-serif'],
            },
            colors: {
                background: '#000000',
                surface: '#0a0a0a',
                border: '#1f1f1f',
                primary: '#ffffff',
                secondary: '#a1a1aa',
                accent: '#3b82f6', // Subtle blue accent
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'card-gradient': 'linear-gradient(rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0))',
            },
            animation: {
                'meteor': 'meteor 5s linear infinite',
            },
            keyframes: {
                meteor: {
                    '0%': { transform: 'rotate(215deg) translateX(0)', opacity: '1' },
                    '70%': { opacity: '1' },
                    '100%': { transform: 'rotate(215deg) translateX(-500px)', opacity: '0' },
                }
            }
        },
    },
    plugins: [],
}
