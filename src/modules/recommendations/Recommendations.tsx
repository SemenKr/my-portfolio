import styled from "styled-components";
import {SectionTitle} from "../../components/titles/SectionTitle.tsx";
import {AsideTitle} from "../../components/titles/AsideTitle.tsx";
import {Rating} from "../../components/rating/Rating.tsx";


export const Recommendations = () => {
    return (
        <SectionWrapper>
            <SectionTitle as={"h2"}>Recommendations</SectionTitle>
            <Description>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                consequat duis enim velit mollit. lorem ipsum</Description>
            <ServicesList>
                <ServicesItem>
                    <Rating value={5} />
                    <AsideTitle>Great Quality!</AsideTitle>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a rna viverra morbi. Morbi donrna viverra morbi. Morbi don urna viverra morbi. Morbi donec amet </Description>
                </ServicesItem>
               {/* <UserCard  />*/}

            </ServicesList>
        </SectionWrapper>
    );
};

const SectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: ${({theme}) => theme.spacing.md};
`

const Description = styled.p`
    max-width: 430px;
    text-align: center;
    color: ${(props) => props.theme.colors.text.primary};
`

const ServicesList = styled.ul`
    width: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
`
const ServicesItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 25px;
    gap: 20px;
    background: ${({theme}) => theme.colors.bgMain};

    svg {
        color: ${({theme}) => theme.colors.primary};
    }
    
    p {
        text-align: left;
        display: -webkit-box;
        -webkit-line-clamp: 4;       /* 🔹 количество строк */
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`
