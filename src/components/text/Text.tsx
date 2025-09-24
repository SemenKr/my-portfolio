// src/components/Text.tsx
import styled, {css, DefaultTheme} from "styled-components";

type TextProps = {
    size?: keyof DefaultTheme["fontSize"];
    weight?: keyof DefaultTheme["fontWeights"];
    color?: keyof DefaultTheme["colors"]["text"];
    bg?: keyof DefaultTheme["colors"] | string;
    padding?: keyof DefaultTheme["spacing"] | string;
    radius?: keyof DefaultTheme["borderRadius"] | string;
    as?: keyof JSX.IntrinsicElements;
};

export const Text = styled.p<TextProps>`
    ${({theme, size = "md", weight = "regular", color = "primary", bg, padding, radius}) => css`
        font-size: ${theme.fontSize[size]};
        font-weight: ${theme.fontWeights[weight]};
        color: ${theme.colors.text[color]};
        line-height: 1.5;
        margin: 0;
        ${bg &&
        css`
            background-color: ${theme.colors[bg as keyof DefaultTheme["colors"]] || bg};
        `}

        ${padding &&
        css`
            padding: ${theme.spacing[padding as keyof DefaultTheme["spacing"]] || padding};
        `}

        ${radius &&
        css`
            border-radius: ${theme.borderRadius[radius as keyof DefaultTheme["borderRadius"]] || radius};
        `}
    `}
`;
