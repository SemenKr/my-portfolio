import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {navItems} from "../../components/menu/menuData.ts";
import {ToggleButton} from "../../shared/ui/ToggleButton.tsx";

interface HeaderProps {
    isDark: boolean;
    onToggleTheme: () => void;
}



export const Header = ({ isDark, onToggleTheme }: HeaderProps) => {
    return (
        <StyledHeader>
            <ToggleButton onClick={onToggleTheme}>
                {isDark ? "🌙" : "☀️"}
            </ToggleButton>
            <Logo size={30} />
            <Menu items={navItems} />
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
    position: fixed;
    display: flex;
    gap: ${({theme}) => theme.spacing.lg};
    flex-direction: column;
    align-items: center;
    top: 0;
    right: 0;
    max-width: 305px;
    box-shadow: ${({ theme }) => theme.shadows.md};
    background: ${({ theme }) => theme.colors.bgMain} ;
    padding: 4rem 1.5rem;;

`
