// shared/ui/ToggleButton.tsx
import styled from "styled-components";

export const ToggleButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding: 0.5rem;
    border-radius: ${({theme}) => theme.borderRadius.full};
    border: 1px solid ${({theme}) => theme.colors.border};
    background: ${({theme}) => theme.colors.bgSecondary};
    color: ${({theme}) => theme.colors.text.primary};
    font-size: ${({theme}) => theme.fontSize.sm};
    font-weight: ${({theme}) => theme.fontWeights.medium};
    cursor: pointer;
    transition: background 0.3s ease, color 0.3s ease, transform 0.2s ease;

    &:hover {
        background: ${({theme}) => theme.colors.primary};
        color: ${({theme}) => theme.colors.text.inverted};

    }

    &:active {
        transform: translateY(1px);
    }
`;
