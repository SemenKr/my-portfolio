import React from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
    children: React.ReactNode;
    /** 
     * @default "primary"
     * @type {"primary" | "secondary" | "outline"}
     * @description Стиль кнопки: primary - основной, secondary - второстепенный, outline - контурный
     */
    variant?: "primary" | "secondary" | "outline";
    /**
     * @default "md"
     * @type {"sm" | "md" | "lg"}
     * @description Размер кнопки: sm - маленький, md - средний, lg - большой
     */
    size?: "sm" | "md" | "lg";
    /** @description Функция вызываемая при клике */
    onClick?: () => void;
    /** @default "button" */
    type?: "button" | "submit" | "reset";
    /** @description Если передан, кнопка становится ссылкой */
    href?: string;
    /** @description Поведение ссылки (только с href) */
    target?: "_self" | "_blank" | "_parent" | "_top";
    /** @description Неактивное состояние */
    disabled?: boolean;
    /** @description Текст для скринридеров */
    ariaLabel?: string;
};
interface StyledButtonProps {
    $variant?: "primary" | "secondary" | "outline";
    $size?: "sm" | "md" | "lg";
    disabled?: boolean;
}

const sizeStyles = {
    sm: css`
        padding: 6px 12px;
        font-size: 14px;
    `,
    md: css`
        padding: 10px 20px;
        font-size: 16px;
    `,
    lg: css`
        padding: 14px 28px;
        font-size: 18px;
    `,
};

const variantStyles = {
    primary: css`
        background: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.text.title};

        &:hover {
            color: ${({ theme }) => theme.colors.text.inverted};
            box-shadow: ${({ theme }) => theme.shadows.md};
        }
    `,
    secondary: css`
        background: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.text.primary};

        &:hover {
            box-shadow: ${({ theme }) => theme.shadows.md};
        }
    `,
    outline: css`
        background: ${({ theme }) => theme.colors.bgMain};
        border: 2px solid ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.secondary};

        &:hover {
            background: ${({ theme }) => theme.colors.secondary};
            color: ${({ theme }) => theme.colors.text.inverted};
            box-shadow: ${({ theme }) => theme.shadows.md};
        }
    `,
};

const StyledButton = styled.button<StyledButtonProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 2px solid transparent;
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.shadows.sm};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    transition: background-color ${({ theme }) => theme.transition}, border-color ${({ theme }) => theme.transition}, color ${({ theme }) => theme.transition}, box-shadow ${({ theme }) => theme.transition};

    ${({ $size = "md" }) => sizeStyles[$size]}
    ${({ $variant = "primary" }) => variantStyles[$variant]}

    ${({ disabled }) => disabled && css`
        opacity: 0.6;
        cursor: not-allowed;
    `}
`;

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = "primary",
    size = "md",
    disabled,
    ariaLabel,
    href,
    target,
    ...props
}) => {
    if (href) {
        return (
            <StyledButton
                as="a"
                href={href}
                $variant={variant}
                $size={size}
                disabled={disabled}
                aria-label={ariaLabel}
                target={target}
                rel={target === "_blank" ? "noopener noreferrer" : undefined}
                {...props}
            >
                {children}
            </StyledButton>
        );
    }
    return (
        <StyledButton
            $variant={variant}
            $size={size}
            disabled={disabled}
            aria-label={ariaLabel}
            type={props.type ?? "button"}
            {...props}
        >
            {children}
        </StyledButton>
    );
};