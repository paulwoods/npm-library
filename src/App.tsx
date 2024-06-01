import './App.css'
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {Stat} from "../lib/components/Stat/Stat.tsx";

export const App = () => {

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
        components: {
            // the component name defined in the `name` parameter
            // of the `styled` API
            MuiStat: {
                defaultProps: {
                    variant: 'outlined',
                },
                styleOverrides: {
                    // the slot name defined in the `slot` and `overridesResolver` parameters
                    // of the `styled` API
                    root: {
                        backgroundColor: '#121212',
                    },
                    value: {
                        color: '#fff',
                    },
                    unit: {
                        color: '#888',
                    },
                },
            },
        },
    });

    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline/>
                <h1>library</h1>
                <Stat value="12,345" unit="Active users / day"/>
            </ThemeProvider>
        </>
    )
}

