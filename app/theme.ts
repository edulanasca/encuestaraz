// theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    montserrat: 'Montserrat, sans-serif',
    bodoniModa: 'Bodoni Moda, serif',
  },
  colors: {
    shoppingPreferencesCheckbox: "rgb(8, 17, 43)"
  }
});

export default theme;
