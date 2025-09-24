import styled from "styled-components";
import introImg from "../../shared/assets/images/intro/person2.png";
import {ContactsBlock} from "../../components/contacts/Contacts.tsx";
import {SkillsBLock} from "../../components/skills/Skills.tsx";
import {About} from "../../components/about/About.tsx";
import {ExtraSkills} from "../../components/extra-skills/ExtraSkills.tsx";
import {Button} from "../../components/button/Button.tsx";


export const Aside = () => {
    return (
        <StyledAside>
            <StyckyWrapper>
                <AuthorCard>
                    <Avatar>
                        <img src={introImg} alt=""/>
                    </Avatar>
                    <AuthorName>
                        <h2>Semen Krekotun</h2>
                        <p>Font-end Developer</p>
                    </AuthorName>
                </AuthorCard>
                <ContactsBlock/>
                <About/>
                <SkillsBLock/>
                <ExtraSkills />
                <Button href="/resume" target="_blank" variant="primary" size="sm">View Resume</Button>
            </StyckyWrapper>

        </StyledAside>
    );
};

const StyledAside = styled.aside`
    grid-column: 1/2;
    grid-row: 1;
    height: 100%;
    background: ${({theme}) => theme.colors.bgMain};
    box-shadow: ${({theme}) => theme.shadows.md};
    position: relative;
`

const StyckyWrapper = styled.div`
    display: flex;
    gap: ${({theme}) => theme.spacing.lg};
    flex-direction: column;
    align-items: center;
    max-width: 20vw;
    padding: 4rem 1.5rem;
    min-width: 305px;
    height: fit-content;
    position: sticky;
    top: -20rem;
`
const AuthorCard = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${({theme}) => theme.spacing.md};
    
`
const Avatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    position: relative;
    background-color: ${({theme}) => theme.colors.bgSecondary};

    &::after {
        content: '';
        position: absolute;
        bottom: 15px;
        right: 15px;
        display: block;
        background-color: #7EB942;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
    }

    img {
        border-radius: 50%;
        display: block;
        width: 150px;
        height: 150px;
        object-fit: cover;
        object-position: center -10%;
    }
`
const AuthorName = styled.div`
    text-align: center;
`
