import React from "react";
import styled from "styled-components";

interface UserCardProps {
    image: string;
    name: string;
    profession: string;
}

export const UserCard: React.FC<UserCardProps> = ({image, name, profession}) => {
    return (
        <UserCardWrapper>
            <UserImg src={image} alt={name}/>
            <UserCardTitle>{name}</UserCardTitle>
            <Description>{profession}</Description>
        </UserCardWrapper>
    );
};

const UserCardWrapper = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    width: 100%;
    gap: 0.3rem 1rem;
    align-items: center;
    justify-content: center;
`
const UserCardTitle = styled.h4`
    color: ${({theme}) => theme.colors.text.title};
    font-weight: 500;
    font-size: 18px;
    line-height: 1.3;
    grid-column: 2;
`

const UserImg = styled.img`
    display: block;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    grid-column: 1;
    grid-row: 1/3;

    p {
        grid-column: 2;
    }
`
const Description = styled.p`
    grid-column: 2;
    color: ${({theme}) => theme.colors.text.primary};
`
