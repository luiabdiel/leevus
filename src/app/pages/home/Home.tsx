import { ThemeProvider } from "styled-components"
import { Header, Hero } from "../../shared/components"

import { Warning } from "./warning/Warning"

import { defaultTheme, GlobalStyle } from "../../styles"

export const Home = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
                <Header />
                <Warning />
                <Hero />
        </ThemeProvider>
    )
}