import styled from "styled-components";

interface AsideHeadingProps {
    children: React.ReactNode;
};

export const AsideTitle = ({ children }: AsideHeadingProps) => {
    return <StyledHeading>{children}</StyledHeading>;
};

const StyledHeading = styled.h3`
    font-size: 18px;
    line-height: 1.24;
    font-weight: 500;
    margin:0;
`;
