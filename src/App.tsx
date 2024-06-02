import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {Stat} from "../lib/main.ts";

function App() {

    const theme = createTheme({
        palette: {
            mode: 'dark',
        },
    })

    return (
        <div>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <h1>library demo</h1>
                <Stat value="12,345" unit="Active users / day"/>
            </ThemeProvider>
        </div>
    )
}

export default App
