import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    color: {
        primary: "#00BCD4",
        secondary: "#E64A19",
        error: "#F44336",
        textColor: '#ffffff',
        defaultTextColor: '#000000',
        hover: '#ACDF87'
    },
    shape: {
        borderRadius: 8,
        backgroundColor: "#FFEB3B",
        textColor: "#212121",
        border: "#607D8B"
    },
});

export default theme;