import { SectionBlock } from "../../components/section/SectionBlock.tsx";
import { EducationsList } from '../education/Education.tsx';
import { EducationItem } from '../education/EducationItem.tsx';
import { workData } from './workData.ts';

export const WorkHistory = () => {
	return (
		<SectionBlock title={ "Work History" } description={ "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum" } >
			<EducationsList>
				{ workData.map((education) => (
					<EducationItem key={ education.id } education={ education } />
				)) }
			</EducationsList>
		</SectionBlock>
	)
}
