import {Intro} from "../../modules/intro/Intro.tsx";
import styled from "styled-components";
import {MyServices} from "../../modules/my-services/MyServices.tsx";
import {Recommendations} from "../../modules/recommendations/Recommendations.tsx";

export const MainComponent = () => {
    return (
        <StyledContainer>
            <Intro/>
            <MyServices />
            <Recommendations />
        </StyledContainer>
    );
};

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    grid-column: 2/3;
    grid-row: 1;
    max-width: 970px;
    margin: 0 auto;
    gap: 70px;
`
