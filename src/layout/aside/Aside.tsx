import styled from "styled-components";


export const Aside = ( ) => {
    return (
        <StyledAside>
            <div></div>фото
            <div></div>имя
            <div></div>роль
            <div></div> социалка
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
    padding: 4rem 1.5rem;;

`
