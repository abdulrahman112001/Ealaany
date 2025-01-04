import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        main: "linear-gradient(90deg, #AEE7EB4D, #C24342)",
      },
      colors: {
        danger: "#D83232",
        primary: "#00CCDC",
        secondary: "#008994",
        gray: "#606060",
        lightGray: "#979C9E",
        borderColor: "#D2D2D2",
        MainBody:"#F9F9F9"
      },
      letterSpacing: {
        "4px": "4px", // Custom class for 4px letter-spacing
      },
      fontFamily: {
        PoppinsLight: ["PoppinsLight", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        PoppinsBold: ["PoppinsBold", "sans-serif"], // Adding Poppins font family
      },
    },
  },
  plugins: [],
}
export default config
