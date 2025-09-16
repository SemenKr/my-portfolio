import styled from "styled-components";
import introImg from "../../shared/assets/images/intro/person2.png";
import {ContactsBlock} from "../../components/contacts/Contacts.tsx";



export const Aside = ( ) => {
    return (
        <StyledAside>
            <AutorCard>
                <Avatar>
                    <img src={introImg} alt=""/>
                </Avatar>
                <AutorName>
                    <h2>Semen Krekotun</h2>
                    <p>Font-end Developer</p>
                </AutorName>
            </AutorCard>
            <ContactsBlock />
            <div></div>характеристики
            <div></div>Skills
            <div></div> Extra Skills
        </StyledAside>
    );
};


const StyledAside = styled.aside`
    display: flex;
    grid-column: 1/2;
    grid-row: 1;
    gap: ${({theme}) => theme.spacing.lg};
    flex-direction: column;
    align-items: center;
    max-width: 20vw;
    box-shadow: ${({ theme }) => theme.shadows.md};
    background: ${({ theme }) => theme.colors.bgMain} ;
    padding: 4rem 1.5rem;
`

const AutorCard = styled.article`
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
    background-color: ${({ theme }) => theme.colors.bgSecondary};
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
const AutorName = styled.div`
    text-align: center;

`
