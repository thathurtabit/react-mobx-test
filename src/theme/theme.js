// Define what styled components base-theme will look like
const theme = {
    colors: {
        primary: '#1B998B',
        secondary: '#DECDF5',
        tertiary: '#938153',
        light: '#F8F1FF',
        dark: '#404040',
    },
    fonts: {
        primary: `'Droid Sans', sans-serif`,
        secondary: `'Droid Serif', serif`,
    },
    transition: {
        duration: '0.25s',
        cubicBez: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        easeOut: 'cubic-bezier(0.23, 1, 0.32, 1)',
    },
    breakpoints: {
        sm: '480px',
        md: '780px',
        lg: '960px',
        xl: '1200px',
        xxl: '1400px',
        horz: '960px',
    }
}

export default theme;