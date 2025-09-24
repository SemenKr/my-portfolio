import { ReactNode } from "react";
import { SectionTitle } from "../titles/SectionTitle.tsx";
import styled from "styled-components";

interface SectionBlockProps {
    title?: string;
    description?: string;
    children: ReactNode;
    titleAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    className?: string;
}

export const SectionBlock = ({
                                 title,
                                 description,
                                 children,
                                 titleAs = "h2",
                                 className
                             }: SectionBlockProps) => {
    return (
        <section className={className}>
            <Container>
                {title && (
                    <SectionTitle as={titleAs}>{title}</SectionTitle>
                )}
                {description && (
                    <Description>{description}</Description>
                )}
                <Content>
                    {children}
                </Content>
            </Container>
        </section>
    );
};

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacing.md};
    box-sizing: border-box;

    ${({ theme }) => theme.media.tablet} {
        padding: 0 ${({ theme }) => theme.spacing.sm};
    }
`;

const Description = styled.p`
    max-width: 430px;
    text-align: center;
    color: ${({ theme }) => theme.colors.text.primary};
    margin: 0 auto ${({ theme }) => theme.spacing.lg};
    line-height: 1.6;
`;

const Content = styled.div`
  width: 100%;
`;
