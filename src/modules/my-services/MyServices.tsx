import styled from "styled-components";
import {SectionTitle} from "../../components/titles/SectionTitle.tsx";
import {Icon} from "../../components/Icon.tsx";
import {AsideTitle} from "../../components/titles/AsideTitle.tsx";


export const MyServices = () => {
    return (
        <SectionWrapper>
            <SectionTitle as={"h2"}>My Services</SectionTitle>
            <Description>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                consequat duis enim velit mollit. lorem ipsum</Description>
            <ServicesList>
                <ServicesItem>
                    <Icon name={"development"} size={68}/>
                    <AsideTitle>Web Development</AsideTitle>
                    <Description>Blog, E-commerce</Description>
                </ServicesItem>
                <ServicesItem>
                    <Icon name={"development"} size={68}/>
                    <AsideTitle>Web Development</AsideTitle>
                    <Description>Blog, E-commerce</Description>
                </ServicesItem>
                <ServicesItem>
                    <Icon name={"development"} size={68}/>
                    <AsideTitle>Web Development</AsideTitle>
                    <Description>Blog, E-commerce</Description>
                </ServicesItem>
                <ServicesItem>
                    <Icon name={"development"} size={68}/>
                    <AsideTitle>Web Development</AsideTitle>
                    <Description>Blog, E-commerce</Description>
                </ServicesItem>
                <ServicesItem>
                    <Icon name={"development"} size={68}/>
                    <AsideTitle>Web Development</AsideTitle>
                    <Description>Blog, E-commerce</Description>
                </ServicesItem>
                <ServicesItem>
                    <Icon name={"development"} size={68}/>
                    <AsideTitle>Web Development</AsideTitle>
                    <Description>Blog, E-commerce</Description>
                </ServicesItem>
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
    align-items: center;
    justify-content: center;
    padding: 25px;
    gap: 20px;
    background: ${({theme}) => theme.colors.bgMain};

    svg {
        color: ${({theme}) => theme.colors.primary};
    }
`
