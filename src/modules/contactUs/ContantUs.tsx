import { ContactInfo } from '../../components/contact-info/ContactInfo'
import { ContactForm } from '../../components/form/ContactForm'
import { SectionBlock } from '../../components/section/SectionBlock'
import styled from 'styled-components'

export const ContactUs = () => {
	return (
		<FormWrapper>
			<FormSectionBlock   title={ "Leave us your info" } >
				<ContactForm />
			</FormSectionBlock>
			<FormSectionBlock   title={ "Contact information" } >
				<ContactInfo />
			</FormSectionBlock>
		</FormWrapper>

	)
}
const FormWrapper = styled.div`
	display: grid;
	grid-template-columns: 1.5fr 1fr;
	gap: 1rem;
`

const FormSectionBlock = styled(SectionBlock)`
	padding: 0;
`