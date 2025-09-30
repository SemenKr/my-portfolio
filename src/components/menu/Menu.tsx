import {Icon} from "../Icon"
import type {MenuItem} from "./types"
import styled from "styled-components";

interface MenuProps  {
    items: MenuItem[]
}

export const Menu = ({items}: MenuProps) => {
    return (
        <StyledMenu>
            <ul className="menu">
                {items.map(({id, label, icon, href}) => (
                    <li key={id}>
                        <a href={href} className="menu__link">
                            {icon && <Icon name={icon} size={20}/>}
                            <span>{label}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </StyledMenu>
    )
}

const StyledMenu = styled.nav`
    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    a {
        transition: color ${({theme}) => theme.transition};
    }

    a:hover {
        color: ${({theme}) => theme.colors.primary};
    }
`
