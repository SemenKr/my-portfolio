import styled from 'styled-components';
import { ContactsBlock } from '../../components/contacts/Contacts';
import { Logo } from '../../components/logo/Logo';
import { SectionTitle } from '../../components/titles/SectionTitle';

export const Footer = () => {
	return (
		<StyledFooter>
			<FooterHeading>
				<Logo size={ 30 } />
				<SectionTitle as="h3">Semen Krekotun</SectionTitle>
			</FooterHeading>

			<ContactsBlock />
			<FooterText>
				© 2023 Semen Krekotun, All Rights Reserved.
			</FooterText>
		</StyledFooter>
	);
};

const StyledFooter = styled.footer`
		padding: 2rem 1.5rem;
		grid-column: 1 / -1;
		display: grid;
		grid-template-columns: 1fr;
		justify-items: center;
		gap: ${({ theme }) => theme.spacing.md};
		background: ${({ theme }) => theme.colors.bgMain};
		box-shadow: ${({ theme }) => theme.shadows.md};
		`

const FooterHeading = styled.div`
display: flex;
gap: 0.5rem;
align-items: center;
`

const FooterText = styled.p`
    margin: 0;
		color: ${({ theme }) => theme.colors.text.primary};
`;