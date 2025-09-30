import styled from 'styled-components';
import { Icon } from '../Icon';

// Данные
const contactItems = [
  {
    icon: 'email',
    fields: [
      { label: 'Email:', value: 'youremail@gmail.com', link: 'mailto:youremail@gmail.com' },
      { label: 'Skype:', value: '@yourusername', link: 'skype:yourusername?call' },
      { label: 'Telegram:', value: '@yourusername', link: 'https://t.me/yourusername' }
    ]
  },
  {
    icon: 'phone', 
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
          <Icon name={item.icon} />
          <ContactContent>
            {item.fields.map((field, fieldIndex) => (
              <div key={fieldIndex}>
                <ContactLabel>{field.label}</ContactLabel>
                <ContactValue>{field.value}</ContactValue>
              </div>
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
`;

const ContactItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
	outline: 1px solid red ;
`;

const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ContactLabel = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.title};
  margin-right: 0.5rem;
`;

const ContactValue = styled.span`
  color: ${({ theme }) => theme.colors.text.primary};
`;