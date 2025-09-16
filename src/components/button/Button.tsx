// components/Button.tsx
import React from "react";
import styled, { css } from "styled-components";

type ButtonProps = {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
};

const StyledButton = styled.button<ButtonProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    font-weight: ${({theme}) => theme.fontWeights.medium};
    border-radius: ${({theme}) => theme.borderRadius.sm};
    transition: background-color ${({theme}) => theme.transition},
    border-color ${({theme}) => theme.transition}, color ${({theme}) => theme.transition};

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
                background: #000;
                color: #fff;

                &:hover {
                    background: #333;
                }
            `}

    ${({variant}) =>
            variant === "secondary" &&
            css`
                background: #f5f5f5;
                color: #000;

                &:hover {
                    background: #e0e0e0;
                }
            `}

    ${({variant}) =>
            variant === "outline" &&
            css`
                background: transparent;
                border: 2px solid #000;
                color: #000;

                &:hover {
                    background: #000;
                    color: #fff;
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
