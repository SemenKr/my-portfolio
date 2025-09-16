import {Intro} from "../../modules/intro/Intro.tsx";
import styled from "styled-components";

export const MainComponent = () => {
    return (
        <StyledContainer>
            <Intro/>
        </StyledContainer>
    );
};

const StyledContainer = styled.div`
    display: flex;
    grid-column: 2/3;
    grid-row: 1;
    max-width: 970px;
    margin: 0 auto;
    outline: 1px solid rebeccapurple;
`
