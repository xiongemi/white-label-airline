import { createMuiTheme } from '@material-ui/core';
import { purple, green } from '@material-ui/core/colors';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});
