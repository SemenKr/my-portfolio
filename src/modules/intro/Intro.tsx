import styled from "styled-components";
import {Button} from "../../components/button/Button.tsx";
import introImg from "../../shared/assets/images/intro/person2.png";

export const Intro = () => {
    return (
        <StyledSection>
            <StyledWrapper>
                <IntroTitle>I’m Semen Krekotun<strong>Front-end</strong> Developer </IntroTitle>
                <p>Frontend-разработчик. Делаю быстрые и адаптивные интерфейсы, оживляю проекты с помощью анимаций и
                    современных технологий.</p>
                <Button href="/resume" target="_blank" variant="primary" size="sm">View Resume</Button>
            </StyledWrapper>
            <IntroImg src={introImg} alt="I am"/>
        </StyledSection>
    );
};

const StyledSection = styled.section`
    position: relative;
    overflow: hidden;
    z-index: 2;
    display: flex;
    height: fit-content;
    background-color: ${({ theme }) => theme.colors.bgMain};
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 897 413'%3E%3Ccircle cx='488' cy='30' r='7' stroke='%2305FF00' stroke-opacity='.8' stroke-width='2'/%3E%3Ccircle cx='56' cy='400' r='7' stroke='%2305FF00' stroke-opacity='.8' stroke-width='2'/%3E%3Ccircle cx='525.861' cy='357.964' r='7' stroke='%23FFB400' stroke-opacity='.8' stroke-width='2'/%3E%3Ccircle cx='8' cy='8' r='7' stroke='%23FFB400' stroke-opacity='.8' stroke-width='2'/%3E%3Cpath stroke='%23FFB400' stroke-opacity='.8' stroke-width='2' d='m862.924 40.997 12.577 6.149-6.148 12.577-12.578-6.148z'/%3E%3Cpath stroke='%230047FF' stroke-opacity='.8' stroke-width='2' d='m341.289 304.338 12.578 6.149-6.149 12.577-12.578-6.148z'/%3E%3Cpath stroke='%23FF2E00' stroke-opacity='.8' stroke-width='2' d='M894.196 408h-10.392l5.196-9 5.196 9Z'/%3E%3C/svg%3E");
    background-size: 92%;
    background-position: center center;
    background-repeat: no-repeat;
    padding: ${({theme}) => theme.spacing.lg} ${({theme}) => theme.spacing.lg} 0;
    margin-bottom: 60px;
`
const IntroImg = styled.img`
    width: 300px;
    object-fit: contain;
    display: block;
`
const IntroTitle = styled.h1`
    color: ${({theme}) => theme.colors.text.title};
    font-weight: ${({theme}) => theme.fontWeights.bold};
    margin-bottom: 1rem;

    strong {
        color: ${({theme}) => theme.colors.primary};
        padding: ${({theme}) => theme.spacing.sm};
    }
`

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    p {
        margin-bottom: 1rem;
    }
`
