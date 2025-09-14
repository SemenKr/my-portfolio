import './App.css'
import styled from "styled-components";
import {Icon} from "./components/Icon.tsx";

function App() {
    return (
        <div className="App">
            <Title>Welcome to IT-INCUBATOR !!!!</Title>
            <Icon size={20} name={'game-development'} />
        </div>
    )
}

export default App

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;
