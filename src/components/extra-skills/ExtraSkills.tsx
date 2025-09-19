import styled from "styled-components";
import {Icon} from "../Icon.tsx";

type ExtraSkillBarProps = string[]


const extraSkillsData: ExtraSkillBarProps[] = [
    ["Bootstrap", "Materialize"],
    ["Stylus", "Sass", "Less"],
    ["Gulp", "Webpack", "Grunt"],
    ["GIT", "Knowledge"]
];

export const ExtraSkills = () => {
    return (
        <List>
            {extraSkillsData.map((row, i) => (
                <ListItem key={i}>
                    <Icon name={"extra-skill-icon"}/>
                    {row.map((skill, j) => (
                        <span key={j}>
                            {skill}
                            {j < row.length - 1 && ","}
                        </span>
                    ))}
                </ListItem>
            ))}
        </List>
    )
}

const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0 0 20px 0;
    margin: 0;
    list-style: none;
    width: 100%;
    border-bottom: 1px solid #F0F0F6;
`;

const ListItem = styled.li`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    font-size: 14px;


    svg {
        color: ${({theme}) => theme.colors.primary};
        width: 15px;
        height: 15px;
    }
`;
