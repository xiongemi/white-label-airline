import { createMuiTheme } from '@material-ui/core';
import { purple, pink } from '@material-ui/core/colors';
import { Localization } from '@material-ui/core/locale';

export const theme = (locale: Localization) => {
  return createMuiTheme(
    {
      palette: {
        primary: {
          main: purple[500],
        },
        secondary: {
          main: pink[500],
        },
      },
      typography: {
        fontFamily: 'Roboto, Helvetica, sans-serif',
      },
    },
    locale
  );
};
