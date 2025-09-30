import styled from 'styled-components';
import { Icon } from '../Icon';

// Данные
const contactItems = [
  {
    icon: 'mail',
    fields: [
      { label: 'Email:', value: 'youremail@gmail.com', link: 'mailto:youremail@gmail.com' },
      { label: 'Skype:', value: '@yourusername', link: 'skype:yourusername?call' },
      { label: 'Telegram:', value: '@yourusername', link: 'https://t.me/yourusername' }
    ]
  },
  {
    icon: 'Mobile', 
    fields: [
      { label: 'Phone:', value: '+7 (999) 123-45-67', link: 'tel:+79991234567' },
      { label: 'WhatsApp:', value: '+7 (999) 123-45-67', link: 'https://wa.me/79991234567' }
    ]
  },
  {
    icon: 'location',
    fields: [
      { label: 'Address:', value: 'Saint Petersburg, Russia' },
      { label: 'Time Zone:', value: 'GMT+3 (MSK)' }
    ]
  }
];

export const ContactInfo = () => {
  return (
    <ContactList>
      {contactItems.map((item, index) => (
        <ContactItem key={index}>
					<IconWrapper>
						<Icon name={item.icon} size={18} />
					</IconWrapper>
          
          <ContactContent>
            {item.fields.map((field, fieldIndex) => (
              <ContactContentWrapper key={fieldIndex}>
                <ContactLabel>{field.label}</ContactLabel>
                <ContactValue>{field.value}</ContactValue>
              </ContactContentWrapper>
            ))}
          </ContactContent>
        </ContactItem>
      ))}
    </ContactList>
  );
};

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	gap: 1.5rem;
	
`;

const ContactItem = styled.li`
  display: flex;
	flex-direction: column;
	background: ${({ theme }) => theme.colors.bgMain};
	padding: 1.5rem;
	border-radius: ${({ theme }) => theme.borderRadius.md};
	box-shadow: ${({ theme }) => theme.shadows.sm};
	border: 1px solid ${({ theme }) => theme.colors.border};

`;

const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
	margin-top: 1rem;
`;

const ContactLabel = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.title};
  margin-right: 0.5rem;
`;

const ContactValue = styled.span`
  color: ${({ theme }) => theme.colors.text.primary};
`;
const IconWrapper = styled.div`
align-self: center;
	width: 40px;	
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.colors.text.primary};
	background-color: ${({ theme }) => theme.colors.primary};
	border-radius: ${({ theme }) => theme.borderRadius.full};
`;

const ContactContentWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`