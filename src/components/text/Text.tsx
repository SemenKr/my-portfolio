// src/components/Text.tsx
import styled, { css, DefaultTheme } from "styled-components";

interface TextProps {
	size?: keyof DefaultTheme["fontSize"];
	weight?: keyof DefaultTheme["fontWeights"];
	color?: keyof DefaultTheme["colors"]["text"];
	$bg?: "primary" | "secondary";
	$padding?: keyof DefaultTheme["spacing"];
	$radius?: keyof DefaultTheme["borderRadius"];
	as?: keyof JSX.IntrinsicElements;
};

export const Text = styled.p<TextProps>`
    ${({ theme, size = "md", weight = "regular", color = "primary", $bg, $padding, $radius }) => css`
        font-size: ${theme.fontSize[size]};
        font-weight: ${theme.fontWeights[weight]};
        color: ${theme.colors.text[color]};
        line-height: 1.5;
        margin: 0;
        ${$bg &&
		css`
            background-color: ${theme.colors[$bg as keyof DefaultTheme["colors"]] || $bg};
        `}

        ${$padding &&
		css`
            padding: ${theme.spacing[$padding] || $padding};
        `}

        ${$radius &&
		css`
            border-radius: ${theme.borderRadius[$radius] || $radius};
        `}
    `}
`;
