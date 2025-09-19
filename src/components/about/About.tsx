import styled from "styled-components";

type Characteristic = {
    label: string;
    value: string;
    isAvailable?: boolean;
};

const aboutData: Characteristic[] = [
    { label: "Age", value: "37" },
    { label: "Residence", value: "Russia" },
    { label: "Freelance", value: "Available", isAvailable: true },
    { label: "Address", value: "SPb" },
];


export const About = () => {
    return (
        <Dl>
            {aboutData.map((item, index) => (
                <Row key={index}>
                    <Dt>{item.label}:</Dt>
                    <Dd isAvailable={item.isAvailable}>{item.value}</Dd>
                </Row>
            ))}
        </Dl>
    );
};

const Dl = styled.dl`
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin: 0;
    width: 100%;
    border-bottom: 1px solid #F0F0F6;
    padding-bottom: 20px;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 12px;
`;

const Dt = styled.dt`
    font-weight: 500;
    font-size: 15px;
    background: ${({theme}) => theme.colors.primary};
    margin: 0;
    padding: 0 5px;
`;

const Dd = styled.dd<{ isAvailable?: boolean }>`
  margin: 0;
  color: ${({ isAvailable }) => (isAvailable ? "green" : "inherit")};
`;
