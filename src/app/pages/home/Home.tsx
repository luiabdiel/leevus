import { useState } from "react"
import { ThemeProvider } from "styled-components"

import { Header, Hero, MenuMobile } from "../../shared/components"
import { Warning } from "./components/warning/Warning"
import { Arrivals } from "./components/arrivals/Arrivals"

import { defaultTheme, GlobalStyle } from "../../styles"

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
                <Arrivals />
            </>
        </ThemeProvider>
    )
}