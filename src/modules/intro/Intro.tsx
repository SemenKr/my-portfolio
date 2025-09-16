import styled from "styled-components";
import {Button} from "../../components/button/Button.tsx";
import introBg from "../../shared/assets/images/intro-bg.svg";
import introImg from "../../shared/assets/images/intro/person2.png";

export const Intro = () => {
    return (
        <StyledSection>
            <StyledContent>
                <StyledWrapper>
                    <IntroTitle>I’m Semen Krekotun<strong>Front-end</strong> Developer </IntroTitle>
                    <p>Frontend-разработчик. Делаю быстрые и адаптивные интерфейсы, оживляю проекты с помощью анимаций и
                        современных технологий.</p>
                    <Button href="/resume" target="_blank" variant="primary" size="sm">View Resume</Button>
                </StyledWrapper>
                <IntroImg src={introImg} alt="I am"/>
            </StyledContent>
            <IntroBg src={introBg}/>
        </StyledSection>
    );
};

const StyledSection = styled.section`
    position: relative;
    overflow: hidden;
    z-index: 2;
    display: flex;
    height: fit-content;
    background-color: ${({theme}) => theme.colors.bgMain};
    padding:${({theme}) => theme.spacing.lg} ${({theme}) => theme.spacing.lg} 0;
`
const IntroBg = styled.img`
    position: absolute;
    bottom: 1rem;
    right: 2rem;
    object-fit: cover;
    width: auto;
    height: fit-content;
    z-index: -1;
    display: block;
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
const StyledContent = styled.div`
    position: relative;
    display: flex;
    gap: 2rem;
    align-self: center;
    justify-self: center;
    z-index: 2;
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
