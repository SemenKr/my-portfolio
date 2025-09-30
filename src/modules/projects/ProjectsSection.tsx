import { SectionBlock } from "../../components/section/SectionBlock.tsx";
import { useState } from 'react';
import styled from 'styled-components';
import { AdaptiveImage } from '../../shared/ui/AdaptiveImage.tsx';
import project1Img from '../../shared/assets/images/projects/project1/Image.png';
import project2Img from '../../shared/assets/images/projects/project2/Image2.png';
import project3Img from '../../shared/assets/images/projects/project3/Image.png';
import project4Img from '../../shared/assets/images/projects/project4/Image.png';
import { Button } from '../../components/button/Button.tsx';

// Типы проектов
const PROJECT_TYPES = {
	ALL: 'all',
	LANDING: 'landing',
	REACT: 'react',
	SPA: 'spa'
} as const;

type ProjectType = typeof PROJECT_TYPES[keyof typeof PROJECT_TYPES];

interface Project {
	id: number;
	title: string;
	type: ProjectType;
	description: string;
	image: string;
}

// Моковые данные проектов
const mockProjects: Project[] = [
	{ id: 1, title: 'Проект 1', type: PROJECT_TYPES.LANDING, description: 'Лендинг страница', image: project1Img },
	{ id: 2, title: 'Проект 2', type: PROJECT_TYPES.REACT, description: 'React приложение', image: project2Img },
	{ id: 3, title: 'Проект 3', type: PROJECT_TYPES.SPA, description: 'Single Page Application', image: project3Img },
	{ id: 4, title: 'Проект 4', type: PROJECT_TYPES.LANDING, description: 'Промо сайт', image: project4Img },
	{ id: 5, title: 'Проект 5', type: PROJECT_TYPES.REACT, description: 'React компоненты', image: project1Img },
	{ id: 6, title: 'Проект 6', type: PROJECT_TYPES.SPA, description: 'Веб приложение', image: project4Img },
];

// Props для стилизованных компонентов
interface FilterButtonProps {
	$active: boolean;
}

export const ProjectsSection = () => {
	const [activeFilter, setActiveFilter] = useState<ProjectType>(PROJECT_TYPES.ALL);

	const filteredProjects = activeFilter === PROJECT_TYPES.ALL
		? mockProjects
		: mockProjects.filter(project => project.type === activeFilter);

	return (
		<SectionBlock title={ "Portfolio" } description={ "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum" } >
			<FilterContainer>
				<FilterList>
					<FilterItem>
						<FilterButton
							$active={ activeFilter === PROJECT_TYPES.ALL }
							onClick={ () => setActiveFilter(PROJECT_TYPES.ALL) }
						>
							<ButtonText $active={ activeFilter === PROJECT_TYPES.ALL }>
								All
							</ButtonText>
						</FilterButton>
					</FilterItem>

					<FilterItem>
						<FilterButton
							$active={ activeFilter === PROJECT_TYPES.LANDING }
							onClick={ () => setActiveFilter(PROJECT_TYPES.LANDING) }
						>
							<ButtonText $active={ activeFilter === PROJECT_TYPES.LANDING }>
								Landing page
							</ButtonText>
						</FilterButton>
					</FilterItem>

					<FilterItem>
						<FilterButton
							$active={ activeFilter === PROJECT_TYPES.REACT }
							onClick={ () => setActiveFilter(PROJECT_TYPES.REACT) }
						>
							<ButtonText $active={ activeFilter === PROJECT_TYPES.REACT }>
								React
							</ButtonText>
						</FilterButton>
					</FilterItem>

					<FilterItem>
						<FilterButton
							$active={ activeFilter === PROJECT_TYPES.SPA }
							onClick={ () => setActiveFilter(PROJECT_TYPES.SPA) }
						>
							<ButtonText $active={ activeFilter === PROJECT_TYPES.SPA }>
								SPA
							</ButtonText>
						</FilterButton>
					</FilterItem>
				</FilterList>
			</FilterContainer>

			<ProjectsGrid>
				{ filteredProjects.map(project => (
					<ProjectCard key={ project.id }>
						<ProjectTitle>{ project.title }</ProjectTitle>
						<AdaptiveImage
							src={ project.image }
							alt={ project.title }
							width="100%"
							objectFit="cover"
							aspectRatio="16/12"

						/>
						<ProjectDescription>{ project.description }</ProjectDescription>
						<ProjectType>{ project.type }</ProjectType>
						<ProjectButtonsWrapper>
							<Button size='sm'>Demo</Button>
							<Button variant='outline' size='sm' >Code</Button>
						</ProjectButtonsWrapper>


					</ProjectCard>
				)) }
			</ProjectsGrid>
		</SectionBlock>
	);
};

// Styled Components
const FilterContainer = styled.div`
  margin-bottom: 3rem;
`;

const FilterList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  padding: 0;
  margin: 0;
  gap: 1rem;
`;

const FilterItem = styled.li`
  margin: 0;
`;

const FilterButton = styled.button<FilterButtonProps>`
  background: none;
  border: none;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    transform: scaleX(${({ $active }) => $active ? 1 : 0});
    transition: transform 0.3s ease;
  }

  &:hover {
    &::after {
      transform: scaleX(1);
    }
  }
`;

// Создаем отдельный компонент для текста кнопки
const ButtonText = styled.span<{ $active?: boolean }>`
  font-size: 1rem;
	font-weight: 500;
  color: ${({ $active, theme }) => $active
		? theme.colors.primary
		: theme.colors.secondary};
  transition: color 0.3s ease;

  ${FilterButton}:hover & {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.bgMain};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-0.3rem);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

const ProjectTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.title};
`;

const ProjectDescription = styled.p`
  margin: 1rem 0 1rem 0;
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: 1.5;
`;

const ProjectType = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: 4px;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const ProjectButtonsWrapper = styled.div`
	display: flex;
	gap: 1rem;
	margin-top: 1rem;
`;