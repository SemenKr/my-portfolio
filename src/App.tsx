import {ThemeProvider} from "styled-components";
import {useState} from "react";
import {GlobalStyle} from "./shared/styles/GlobalStyles.tsx";
import {darkTheme, defaultTheme} from "./shared/styles/Theme.styled.tsx";
import {MainComponent} from "./layout/main/MainComponent.tsx";
import {Header} from "./layout/header/Header.tsx";

function App() {
    const [isDark, setIsDark] = useState(false);

    const theme = isDark ? darkTheme : defaultTheme;

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Header isDark={isDark} onToggleTheme={() => setIsDark(prev => !prev)}/>
            <MainComponent />
        </ThemeProvider>
    );
}

export default App
