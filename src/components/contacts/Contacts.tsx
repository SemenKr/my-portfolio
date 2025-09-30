import {Icon} from "../Icon.tsx";
import styled from "styled-components";

const contactsData = [
    {
        name: "youtube",
        href: "#",
        ariaLabel: "you-tube"
    },
    {
        name: "dribbble",
        href: "#",
        ariaLabel: "dribbble"
    },
    {
        name: "facebook",
        href: "#",
        ariaLabel: "facebook"
    },
    {
        name: "twitter",
        href: "#",
        ariaLabel: "twitter"
    },
    {
        name: "instagram",
        href: "#",
        ariaLabel: "instagram"
    },

]

export const ContactsBlock = () => {
    return (
        <StyledList>
            {contactsData.map((item, i) => (
                <li key={i}>
                    <a href={item.href} aria-label={item.ariaLabel}><Icon name={item.name} /></a>
                </li>
            ))}
        </StyledList>
    );
};

const StyledList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
    justify-content: center;
    align-items: center;



    a {
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${({theme}) => theme.colors.text.primary};
        background-color: ${({theme}) => theme.colors.primary};
        border-radius: ${({theme}) => theme.borderRadius.full};
        transition: box-shadow ${({theme}) => theme.transition},
        transform ${({theme}) => theme.transition};

        &:hover {
            box-shadow: ${({theme}) => theme.shadows.md};
						transform: translateY(-2px);
        }

        svg {
            width: 14px;
            height: 14px;
            color: ${({theme}) => theme.colors.text.title};
        }
    }
`
