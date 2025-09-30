import { ContactInfo } from '../../components/contact-info/ContactInfo'
import { ContactForm } from '../../components/form/ContactForm'
import styled from 'styled-components'
import { SectionTitle } from '../../components/titles/SectionTitle'

export const ContactUs = () => {
	return (
		<FormWrapper>
				<SectionTitleForm as="h2">Contact Me</SectionTitleForm>
				<ContactFormStyled />
				<SectionTitleInfo as="h2">Contact Me</SectionTitleInfo>
				<ContactInfo />
		</FormWrapper>

	)
}
const FormWrapper = styled.div`
	display: grid;
	grid-template-columns: 1.5fr 1fr;
	gap: 1rem;
`

const SectionTitleForm = styled(SectionTitle)`
	grid-column: 1 ;
	text-align: center;
`

const SectionTitleInfo = styled(SectionTitle)`
	grid-column: 2 ;
	grid-row: 1 ;
	text-align: center;
`
const ContactFormStyled = styled(ContactForm)`
	grid-column: 1 ;
	grid-row: 2 ;
	width: 100% ;
`