import { createTheme } from '@mui/material/styles';

const themeSetup = 
	{
		dark: {
			background: 'rgb( 175, 99, 71 )',
			greyBackground: 'rgb(46, 46, 51)',
			primaryText: 'rgb(244, 244, 245)',
			secondaryText: 'rgb(255, 255, 255)',
			borderColor: 'rgba(82,82,90,1)',
      dividerColor: 'rgba(255,255,255,0.08)'
		},
	}

// Create a theme instance.
let theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      // main: 'rgb(255, 99, 71)',
      main: '#FF6347',
      hover: '#d16347',
      active: 'rgba(49, 151, 149, 0.25)'
    },
    secondary: {
      main: '#9f7aea',
      hover: '#B886F9',
      active: 'rgba(128, 90, 213, 0.25)',
    },
    tertiary: {
      main: '#667eea',
      hover: '#8096F7',
      active: 'rgba(90, 103, 216, 0.25)'
    },
    quaternary: {
      main: 'rgb(237, 100, 166)',
    },
    background: {
      paper: 'rgba(35, 35, 39, 1)',
      default: themeSetup.dark.background,
    },
    text: {
      primary: themeSetup.dark.primaryText,
      secondary: themeSetup.dark.secondaryText,
      tertiary: 'rgb(228, 228, 231)'
    },
    action: {
      hover: '#ffffff',
      light: {},
    },
    greyButton: {
      background: 'rgb(46, 46, 51)',
      hover: 'rgba(63,62,68,255)'
    }
  },
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
    },
  components: {
    // Name of the component
    MuiAccordion: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          marginBottom: '1rem',
        },
      },
    },
    MuiAppBar: {
      variants: [
        {
          props: { color: 'background' },
          style: {
            background: themeSetup.dark.background
          }
        }
      ]
    },
    MuiTextField: {
      variants: [
        {
          props: { variant: 'filled' },
          style: {
            '&:hover': {
              border: 'none',
            },
            '& .MuiFilledInput-root': {
              background: themeSetup.dark.greyBackground,
              border: `1px solid ${themeSetup.dark.borderColor}`,
              borderRadius: 4,
            },
            '& .MuiInputLabel-root': {
              '&.Mui-focused': {
                color: themeSetup.dark.secondaryText,
              },
            },
          }
        }
      ]
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderColor: themeSetup.dark.dividerColor
        }
      }
    },
  },
});

theme.typography.h1 = {
  fontSize: '5rem',
  lineHeight: '1.1',
  color: theme.palette.text.primary,
  fontWeight: '700',
  letterSpacing: '-0.02em',
  marginBottom: '2rem',
  '@media (max-width:1200px)': {
    fontSize: '4.71rem',
  },
  '@media (max-width:1024px)': {
    fontSize: '3.9rem',
  },
  '@media (max-width:880px)': {
    fontSize: '3rem',
  },
};

theme.typography.h2 = {
  color: theme.palette.text.primary,
  fontWeight: '700',
  fontSize: '3.5rem',
  marginBottom: '1rem',
  '@media (max-width:880px)': {
    fontSize: '2.63rem',
  },
  lineHeight: '1.0',
  letterSpacing: '-0.02em',
};

theme.typography.h3 = {
  color: theme.palette.text.primary,
  letterSpacing: '-.02em',
  fontSize: '2.5rem',
  marginBottom: '1rem',
  fontWeight: '700',
};

theme.typography.h4 = {
  color: theme.palette.text.primary,
  letterSpacing: '-.02em',
  fontSize: '2rem',
  marginBottom: '1rem',
  fontWeight: '600',
};

theme.typography.h5 = {
  color: theme.palette.text.primary,
  letterSpacing: '-.02em',
  fontSize: '1.6rem',
  marginBottom: '1rem',
  fontWeight: '500',
};

theme.typography.h6 = {
  color: theme.palette.text.primary,
  letterSpacing: '-.02em',
  fontSize: '1.3rem',
  marginBottom: '1rem',
  fontWeight: '500',
};

theme.typography.subtitle1 = {
  fontSize: '1.25rem',
  lineHeight: '1.5',
  marginBottom: '1.5rem',
  letterSpacing: '-.02em',
  fontWeight: '400',
  fontFamily: 'Inter, sans-serif',
  color: theme.palette.text.secondary
}

theme.typography.p = {
  color: theme.palette.text.secondary,
  fontSize: '1.125rem',
  marginBottom: '2rem',
  display: 'block'
}
    
export default theme;
