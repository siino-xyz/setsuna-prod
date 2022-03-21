import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    background: {
      default: '#353349'
    },
    primary: {
      main: '#00D1FF',
    },
    secondary: {
      main: '#92FF26',
    },
    text: {
      primary: '#F4F4F4',
      secondary: '#C8C8C8'
    },
    common: {
      balck: '#292929',
      white: '#F4F4F4',
    },
    success: {
        main: '#F37D27'
    },    
    warning: {
        main: 'rgba(0, 0, 0, 0)',
    },
    error: {
      main: red.A400,
    },

  },
      typography: {
        htmlFontSize: 14,
        h1: {
            fontSize: "3rem",
            fontFamily: [
                'MuseoModerno',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            fontWeight: 600,
            
        },
        h2: {
            fontSize: "2rem",
            fontWeight: 700,
            fontFamily: [
                'Zen Kaku Gothic Antique',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
        },
        h3: {
            fontSize: "1.6rem",
            fontFamily: [
                'Zen Kaku Gothic Antique',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            letterSpacing: '0.1rem',
            fontWeight: 700,
        },
        h3Jp: {
            fontSize: "1.6rem",
            fontFamily: [
                'Zen Kaku Gothic Antique',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            fontWeight: 700,
            letterSpacing: '0.1rem'
        },
        h4: {
            fontSize: "1.25rem",
            fontFamily: [
                'Zen Kaku Gothic Antique',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            fontWeight: 700,
        },
        subtitle1: {
            fontSize: "1rem",
            fontFamily: [
                'Zen Kaku Gothic Antique',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            fontWeight: 700,
        },
        smallTitle: {
            fontSize: "0.8rem",
            letterSpacing: "0.07rem",
            fontFamily: [
                'MuseoModerno',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            fontWeight: 600,
        },
        smallParagraph: {
            fontSize: "0.8rem",
            letterSpacing: "0.07rem",
            fontFamily: [
                'Zen Kaku Gothic Antique',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            fontWeight:  400,
        },
        body1: {
            fontSize: "1rem",
            fontFamily: [
                'Zen Kaku Gothic Antique',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            fontWeight: 400,
            letterSpacing: "0.08em", 
            lineHeight: '1.6rem' 
        },
        button: {
            fontFamily: 'Zen Kaku Gothic Antique',
            fontWeight: 700,
            fontSizz: '0.7rem',
            textTransform: 'none',
            letterSpacing: '0.08rem',
        },
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
});

export default theme;
