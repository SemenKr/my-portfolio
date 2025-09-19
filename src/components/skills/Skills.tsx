import styled from "styled-components";
import {useEffect, useState} from "react";
import {AsideTitle} from "../titles/AsideTitle.tsx";


type SkillBarProps = {
    label: string;
    percentage: number;
};

const skillsData: SkillBarProps[] = [
    {
        label: "HTML",
        percentage: 100
    },
    {
        label: "CSS",
        percentage: 95
    },
    {
        label: "Js",
        percentage: 70
    },
    {
        label: "React",
        percentage: 60
    },
    {
        label: "Wordpress",
        percentage: 50
    },

]

export const SkillsBLock = () => {
    return (
        <SectionWrapper>
            <AsideTitle>Extra Skills</AsideTitle>
            <StyledList>
                {skillsData.map((item, i) => (
                    <li key={i}>
                        <SkillBar label={item.label} percentage={item.percentage}/>
                    </li>
                ))}
            </StyledList>
        </SectionWrapper>
    );
};

export const SkillBar: React.FC<SkillBarProps> = ({label, percentage}) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // при маунте плавно доезжаем до процента
        const timeout = setTimeout(() => setProgress(percentage), 100);
        return () => clearTimeout(timeout);
    }, [percentage]);

    return (
        <Wrapper>
            <Label>
                <span>{label}</span>
                <span>{percentage}%</span>
            </Label>
            <BarContainer>
                <BarFill percentage={progress}/>
            </BarContainer>
        </Wrapper>
    );
};

const SectionWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style: none;
    padding: 0 0 20px 0;
    margin: 0;
    width: 100%;
    border-bottom: 1px solid #F0F0F6;

`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

const Label = styled.span`
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const BarContainer = styled.div`
    width: 100%;
    background-color: ${({theme}) => theme.colors.bgMain};
    border-radius: 6px;
    border: 1px solid ${({theme}) => theme.colors.primary};
    overflow: hidden;
    padding: 1px;

`;

const BarFill = styled.div<{
    percentage: number
}>`
    height: 2px;
    width: ${({percentage}) => percentage}%;
    background: ${({theme}) => theme.colors.primary};
    border-radius: 6px;
    transition: width 1.4s cubic-bezier(0.25, 1, 0.5, 1);
`;
