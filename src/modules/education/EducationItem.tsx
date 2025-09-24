import { AsideTitle } from "../../components/titles/AsideTitle.tsx";
import { Text } from "../../components/text/Text.tsx";
import styled from "styled-components";
import { EducationItemType } from './education.ts';


interface EducationItemProps {
	education: EducationItemType;
}


export const EducationItem = ({ education }: EducationItemProps) => {
	return (
		<EducationItemWrapper>
			<EducationHeader>
				<AsideTitle>{ education.university }</AsideTitle>
				<EducationUserInfo>
          <Text>{education.role}</Text>
					<Text size={ "xs" } color={ "inverted" } bg={ "primary" } as={ "span" } padding="xs"
						radius="sm"> {education.period}</Text>
				</EducationUserInfo>
			</EducationHeader>
			<EducationContent>
        <AsideTitle>{education.degree}</AsideTitle>
        <Text>{education.description}</Text>
			</EducationContent>

		</EducationItemWrapper>
	);
};

const EducationItemWrapper = styled.li`
		display: flex;
		justify-content: space-between;
		gap: 5rem;
		padding: 2rem 0;
		& + & {
		border-top: 1px solid ${({ theme }) => theme.colors.border};
		}
`;
const EducationHeader = styled.div`
		min-width: 12rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
`;
const EducationUserInfo = styled.div`
display: flex;
gap: 1rem;
`
const EducationContent = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
max-width: 48rem;`