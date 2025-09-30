import {Intro} from "../../modules/intro/Intro.tsx";
import styled from "styled-components";
import {MyServices} from "../../modules/my-services/MyServices.tsx";
import {Recommendations} from "../../modules/recommendations/Recommendations.tsx";
import {Education} from "../../modules/education/Education.tsx";
import {WorkHistory} from "../../modules/work-history/WorkHistory.tsx";
import {Blog} from "../../modules/blog/Blog.tsx";
import { ProjectsSection } from '../../modules/projects/ProjectsSection.tsx';
import { MapBlock } from '../../modules/map/MapBlock.tsx';
import { ContactUs } from '../../modules/contactUs/ContantUs.tsx';

export const MainComponent = () => {
    return (
        <StyledContainer>
            <Intro/>
            <MyServices />
            <Recommendations />
            <Education />
            <WorkHistory />
            <ProjectsSection />
            <Blog />
						<ContactUs />
						<MapBlock />
        </StyledContainer>
    );
};

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    grid-column: 2/3;
    grid-row: 1;
    max-width: 970px;
    margin: 0 auto;
    gap: 70px;
    padding-bottom: 2rem;
    position: relative;
`
