import { ThemeProvider } from "styled-components"
import { Header, Hero, MenuMobile } from "../../shared/components"

import { Warning } from "./warning/Warning"

import { defaultTheme, GlobalStyle } from "../../styles"
import { useState } from "react"

export const Home = () => {
    const [menuIsVisible, setMenuIsVisible] = useState(false)

    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <>
                <MenuMobile
                    menuIsVisible={menuIsVisible}
                    setMenuIsVisible={setMenuIsVisible}
                />
                <Header setMenuIsVisible={setMenuIsVisible} />
                <Warning />
                <Hero />
            </>
        </ThemeProvider>
    )
}