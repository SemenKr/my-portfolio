import styled from "styled-components";
import {Button} from "../../components/button/Button.tsx";

export const Intro = () => {
    return (
        <StyledSection>
            <h1>I’m Semen Krekotun<strong>Front-end</strong> Developer </h1>
            <p>Frontend-разработчик. Делаю быстрые и адаптивные интерфейсы, оживляю проекты с помощью анимаций и
                современных технологий.</p>
            <a href={'#'} target={'_blank'}>View Resume</a>
            <Button as="a" href="/resume"  variant="primary" size="sm">View Resume</Button>
        </StyledSection>
    );
};

const StyledSection = styled.section`
    background-color: ${({theme}) => theme.colors.bgMain};
`
