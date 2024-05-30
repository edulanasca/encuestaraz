// theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  breakpoints: {
    base: '0em', // 0px
    xs: "414px",
    sm: '30em', // ~480px. em is a relative unit and is dependant on the font size.
    md: '48em', // ~768px
    lg: '62em', // ~992px
    xl: '80em', // ~1280px
    '2xl': '96em', // ~1536px
  },
  fonts: {
    montserrat: 'Montserrat, sans-serif',
    bodoniModa: 'Bodoni Moda, serif',
  },
  colors: {
    shoppingPreferencesCheckbox: "rgb(8, 17, 43)",
    montaGold: "rgb(203, 150, 71)"
  }
});

export default theme;
