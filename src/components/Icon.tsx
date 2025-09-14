import styled from "styled-components"

interface IconProps {
    name: string
    size?: number
    color?: string
}

const Svg = styled.svg<{ size?: number; color?: string }>`
    width: ${({ size }) => size || 24}px;
    height: ${({ size }) => size || 24}px;
    color: ${({ color }) => color || "currentColor"};
`

export const Icon = ({ name, size, color }: IconProps) => (
    <Svg size={size} color={color} aria-hidden="true">
        <use xlinkHref={`#icon-${name}`} />
    </Svg>
)
