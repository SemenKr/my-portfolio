import styled, {ThemeProvider} from "styled-components";
import {useState} from "react";
import {darkTheme, defaultTheme} from "./shared/styles/Theme.styled.tsx";
import {MainComponent} from "./layout/main/MainComponent.tsx";
import {Header} from "./layout/header/Header.tsx";
import {GlobalStyle} from "./shared/styles/GlobalStyles.tsx";
import {Aside} from "./layout/aside/Aside.tsx";

export function App() {
    const [isDark, setIsDark] = useState(false);

    const theme = isDark ? darkTheme : defaultTheme;

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <StyledContainer>
                <Header isDark={isDark} onToggleTheme={() => setIsDark(prev => !prev)}/>
                <MainComponent/>
                <Aside />
            </StyledContainer>

        </ThemeProvider>
    );
}

const StyledContainer = styled.div`
    display: grid;
    grid-template-columns:auto 1fr auto;
    gap: 1rem;
`
