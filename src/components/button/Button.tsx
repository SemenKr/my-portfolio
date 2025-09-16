// components/Button.tsx
import React from "react";
import styled, { css } from "styled-components";

type ButtonProps = {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    href?: string;
};

const StyledButton = styled.button<ButtonProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 2px solid transparent;
    cursor: pointer;
    box-shadow: ${({theme}) => theme.shadows.sm};
    font-weight: ${({theme}) => theme.fontWeights.medium};
    border-radius: ${({theme}) => theme.borderRadius.sm};
    transition: background-color ${({theme}) => theme.transition},
    border-color ${({theme}) => theme.transition}, color ${({theme}) => theme.transition},
    box-shadow ${({theme}) => theme.transition};

    ${({size}) =>
            size === "sm" &&
            css`
                padding: 6px 12px;
                font-size: 14px;
            `}

    ${({size}) =>
            size === "md" &&
            css`
                padding: 10px 20px;
                font-size: 16px;
            `}

    ${({size}) =>
            size === "lg" &&
            css`
                padding: 14px 28px;
                font-size: 18px;
            `}

    ${({variant}) =>
            variant === "primary" &&
            css`
                background: ${({theme}) => theme.colors.primary};
                color: ${({theme}) => theme.colors.text.title};

                &:hover {
                    color: ${({theme}) => theme.colors.text.inverted};
                    box-shadow: ${({theme}) => theme.shadows.md};
                }
            `}

    ${({variant}) =>
            variant === "secondary" &&
            css`
                background: #f5f5f5;
                color: #000;

                &:hover {
                    box-shadow: ${({theme}) => theme.shadows.md};
                }
            `}

    ${({variant}) =>
            variant === "outline" &&
            css`
                background: ${({theme}) => theme.colors.bgMain};
                border: 2px solid  ${({theme}) => theme.colors.secondary};
                color:  ${({theme}) => theme.colors.secondary};

                &:hover {
                    background: ${({theme}) => theme.colors.secondary};
                    color: ${({theme}) => theme.colors.text.inverted};

                    box-shadow: ${({theme}) => theme.shadows.md};
                }
            `}
`;

const Button: React.FC<ButtonProps> = ({
                                           children,
                                           variant = "primary",
                                           size = "md",
                                           ...props
                                       }) => {
    return (
        <StyledButton variant={variant} size={size} {...props}>
            {children}
        </StyledButton>
    );
};

export default Button;
