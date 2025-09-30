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
        <StyledHeader>  {/* <- убрали isDark отсюда */}
            <StickyWrapper>
                <ToggleButton onClick={onToggleTheme}>
                    {isDark ? "🌙" : "☀️"}
                </ToggleButton>
                <Logo size={30} />
                <Menu items={navItems} />
            </StickyWrapper>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    position: relative;
    grid-column: 3/4;
    box-shadow: ${({ theme }) => theme.shadows.md};
    background: ${({ theme }) => theme.colors.bgMain};
    padding: 4rem 1.5rem;
`;

const StickyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 9rem;
    gap: ${({theme}) => theme.spacing.lg};
    position: sticky;
    top: 2rem;
    padding-bottom: 6rem;
`;