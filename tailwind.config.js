/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        'node_modules/flowbite-react/lib/esm/**/*.js'
    ],
    theme: {
        extend: {
            colors:{
                primary: {
                    50:"#bdb8ff",
                    100:"#7e66cd",
                    200:"#6b5bba",
                    300:"#594fa7",
                    400:"#474494",
                    500:"#353980",
                    600:"#232e6d",
                    700:"#11135a",
                    800:"#000046",
                    900:"#000033",
                },
                secondary: "#e17911",
            },
        },
    },
    plugins: [
        // eslint-disable-next-line no-undef
        require('flowbite/plugin')
    ]
}

