import styled from "styled-components";

type SectionHeadingProps = {
    children: React.ReactNode;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export const SectionTitle = ({ children, as }: SectionHeadingProps) => {
    return <StyledHeading as={as}>{children}</StyledHeading>;
};

const StyledHeading = styled.h2`
    font-size: 32px;
    line-height: 1.24;
    font-weight: 700;
    margin:0;
    color: ${(props) => props.theme.colors.text.title};
    text-align: center;
`;
