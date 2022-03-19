import { createTheme } from "@mui/system";

const theme = createTheme({
  palette: {
      background: {
          default: '#353349'
      },
      primary: {
          main: '#F37D27',
          light: '#000000'
      },
      secondary: {
          main: 'rgba(0,0,0,0)',
      },
      common: {
          white: '#F4F4F4',
          black: '#292929',
      },
      text: {
          primary: '#F4F4F4',
          secondary: '#C8C8C8',
          disabled: '#686868'
      }
  },
  typography: {
      htmlFontSize: 16,
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
          fontSize: "2.25rem",
          fontWeight: 600,
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
      },
      h3: {
          fontSize: "1.5rem",
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
      h4: {
          fontSize: "1.25rem",
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
      subtitle2: {
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
          fontWeight: 700,
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
  }
});

export default theme;