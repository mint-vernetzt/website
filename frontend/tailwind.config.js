const defaultTheme = require("tailwindcss/defaultTheme");
const lineClamp = require("@tailwindcss/line-clamp");
const { colors, fontSizes } = require("./src/styles/theme");

let colorSafelist = [];
Object.keys(colors).forEach((color) => {
  colorSafelist = colorSafelist.concat([
    `bg-${color}`,
    `text-${color}`,
    `border-${color}`,
    `hover:bg-${color}`,
    `hover:text-${color}`,
    `hover:border-${color}`,
    `focus:bg-${color}`,
    `focus:text-${color}`,
    `focus:border-${color}`,
  ]);
});
let fontSizeSafelist = [];
Object.keys(fontSizes).forEach((fontsize) => {
  fontSizeSafelist = fontSizeSafelist.concat([`text-${fontsize}`]);
});

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      keyframes: {
        slideUpAndFade: {
          "0%": { opacity: 0, transform: "translateY(2px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        slideUpAndFade:
          "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      maxWidth: {
        xs: "20rem",
        "1/2": "50%",
        "3/4": "75%",
      },
    },
    fontFamily: {
      sans: ["'Source Sans Pro'", ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      ...fontSizes,
    },
    lineHeight: {
      ...defaultTheme.lineHeight,
      "1": "1.1",
      snug: "1.333333",
      "5": "1.375rem",
    },
    flex: {
      ...defaultTheme.flex,
      100: "0 0 100%",
      label: "0 0 130px",
      "1/4": "0 0 25%",
      "1/3": "0 0 33.3333%",
      "1/2": "0 0 50%",
      "2/3": "0 0 66.66666%",
      "5/12": "0 0 41.66666667%",
      "7/12": "0 0 58.33333333%;",
      18: "0 0 4.5rem;",
    },
    aspectRatio: {
      '4/3': '4 / 3',
      '16/9': '16 / 9',
    },
    minHeight: {
      ...defaultTheme.minHeight,
      12.5: "12.5rem",
      "3/4": "75%",
    },
    
    spacing: {
      ...defaultTheme.spacing,
      18: "4.5rem",
      22: "5.5rem",
      116: "29rem",
    },
    zIndex: {
      ...defaultTheme.zIndex,
      "-1": "-1",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',        
      },
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    boxShadow: {
      ...defaultTheme.boxShadow,
      DEFAULT: "0 2px 16px 0 rgba(0, 0, 0, 0.17)",
      sm: "0px 8px 16px rgba(0, 0, 0, 0.1)",
      md: "0 2px 16px 0 rgba(0, 0, 0, 0.37)",
      lg: "0 7px 38px -4px rgba(0, 0, 0, 0.2)",      
    },
    dropShadow: {
      sm: "0px 8px 16px rgba(0, 0, 0, 0.1)",      
    }
  },
  variants: {
    extend: {
      brightness: ["hover", "focus"],
      borderStyle: ["hover", "focus"],
      borderWidth: ["last"],
      padding: ["first", "last"],
    },
  },
  plugins: [lineClamp],
};
