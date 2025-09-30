import { SectionBlock } from "../../components/section/SectionBlock.tsx";
import styled from "styled-components";
import { EducationItem } from './EducationItem.tsx';
import { educationData } from './educationData.ts';

export const Education  = () => {
	return (
		<SectionBlock title={ "Education" }
			description={ "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum" }>
			<EducationsList>
      {educationData.map((education) => (
        <EducationItem key={education.id} education={education} />
      ))}
			</EducationsList>
		</SectionBlock>
	)
}

export const EducationsList = styled.ul`
    list-style-type: none;
		background: ${({ theme }) => theme.colors.bgMain};
		padding: 2rem;
		box-shadow: ${({ theme }) => theme.shadows.sm};
`;