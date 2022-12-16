import { fuseDark } from '@fuse/colors';
import _ from '@lodash';
import { lightBlue, red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import qs from 'qs';

/**
 * SETTINGS DEFAULTS
 */
export const defaultSettings = {
  customScrollbars: true,
  direction: 'ltr',
  theme: {
    main: 'default',
    navbar: 'mainThemeDark',
    toolbar: 'mainThemeLight',
    footer: 'mainThemeDark',
  },
};

export function getParsedQuerySettings() {
  const parsedQueryString = qs.parse(window.location.search, { ignoreQueryPrefix: true });

  if (parsedQueryString && parsedQueryString.defaultSettings) {
    return JSON.parse(parsedQueryString.defaultSettings);
  }
  return {};

  // Generating route params from settings
  /* const settings = qs.stringify({
        defaultSettings: JSON.stringify(defaultSettings, {strictNullHandling: true})
    });
    console.info(settings); */
}

/**
 * THEME DEFAULTS
 */
export const defaultThemeOptions = {
  typography: {
    fontFamily: ['Inter var', 'Roboto', '"Helvetica"', 'Arial', 'sans-serif'].join(','),
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        enableColorOnDark: true,
      },
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '18px',
        },
        sizeSmall: {
          borderRadius: '15px',
        },
        sizeLarge: {
          borderRadius: '21px',
        },
        contained: {
          boxShadow: 'none',
          '&:hover, &:focus': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiButtonGroup: {
      styleOverrides: {
        contained: {
          borderRadius: 18,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 16,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 16,
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          borderRadius: 8,
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          '&:before, &:after': {
            display: 'none',
          },
        },
      },
    },
    MuiSlider: {
      defaultProps: {
        color: 'secondary',
      },
    },
    MuiCheckbox: {
      defaultProps: {
        color: 'secondary',
      },
    },
    MuiRadio: {
      defaultProps: {
        color: 'secondary',
      },
    },
    MuiSwitch: {
      defaultProps: {
        color: 'secondary',
      },
    },
  },
};

export const mustHaveThemeOptions = {
  typography: {
    htmlFontSize: 10,
    fontSize: 13,
    body1: {
      fontSize: '1.3rem',
    },
    body2: {
      fontSize: '1.3rem',
    },
  },
};

export const defaultThemes = {
  default: {
    palette: {
      mode: 'light',
      primary: fuseDark,
      secondary: {
        light: lightBlue[400],
        main: lightBlue[600],
        dark: lightBlue[700],
      },
      error: red,
    },
    status: {
      danger: 'orange',
    },
  },
  defaultDark: {
    palette: {
      mode: 'dark',
      primary: fuseDark,
      secondary: {
        light: lightBlue[400],
        main: lightBlue[600],
        dark: lightBlue[700],
      },
      error: red,
    },
    status: {
      danger: 'orange',
    },
  },
};

export function extendThemeWithMixins(obj) {
  const theme = createTheme(obj);
  return {
    border: (width = 1) => ({
      borderWidth: width,
      borderStyle: 'solid',
      borderColor: theme.palette.divider,
    }),
    borderLeft: (width = 1) => ({
      borderLeftWidth: width,
      borderStyle: 'solid',
      borderColor: theme.palette.divider,
    }),
    borderRight: (width = 1) => ({
      borderRightWidth: width,
      borderStyle: 'solid',
      borderColor: theme.palette.divider,
    }),
    borderTop: (width = 1) => ({
      borderTopWidth: width,
      borderStyle: 'solid',
      borderColor: theme.palette.divider,
    }),
    borderBottom: (width = 1) => ({
      borderBottomWidth: width,
      borderStyle: 'solid',
      borderColor: theme.palette.divider,
    }),
  };
}

export function mainThemeVariations(theme) {
  return {
    mainThemeDark: _.merge({}, theme, {
      palette: {
        mode: 'dark',
        background: {
          paper: '#1E2125',
          default: '#121212',
        },
        text: {
          primary: 'rgb(255,255,255)',
          secondary: 'rgb(229, 231, 235)',
          disabled: 'rgb(156, 163, 175)',
        },
      },
    }),
    mainThemeLight: _.merge({}, theme, {
      palette: {
        mode: 'light',
        background: {
          paper: '#FFFFFF',
          default: '#F7F7F7',
        },
        text: {
          primary: 'rgb(17, 24, 39)',
          secondary: 'rgb(107, 114, 128)',
          disabled: 'rgb(149, 156, 169)',
        },
      },
    }),
  };
}
