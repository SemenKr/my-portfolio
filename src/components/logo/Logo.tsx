import {Icon} from "../Icon.tsx";
import styled from "styled-components";

interface LogoProps {
    size?: number;
}

export const Logo = ({size}: LogoProps) => {
    return (
        <StyledLogo href="#">
            <Icon name="logo" size={size}/>
        </StyledLogo>
    );
};

const StyledLogo = styled.a`
    color: rebeccapurple;
`
