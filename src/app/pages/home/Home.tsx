import { ThemeProvider } from "styled-components"
import { defaultTheme, GlobalStyle } from "../../styles"

export const Home = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <h1>Página home</h1>
        </ThemeProvider>
    )
}