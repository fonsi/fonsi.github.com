import styled from 'styled-components';
import { contact } from '../data/contact';

const ContactSection = styled.div`
  margin: 2rem 0;
  padding: 1.5rem;
  background-color: #f8f9fa;
  border-radius: 0.5rem;

  @media (max-width: 768px) {
    padding: 1rem;
    margin: 1rem 0;
  }
`;

const ContactGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-decoration: none;
  color: #495057;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const ContactIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const ContactText = styled.span`
  font-size: 1rem;
  font-weight: 500;
`;

export const Contact = () => {
  return (
    <ContactSection>
      <ContactGrid>
        {contact.map((item, idx) => (
          <ContactItem key={idx} href={item.link} target="_blank" rel="noopener noreferrer">
            <ContactIcon src={item.icon} alt={item.title} />
            <ContactText>{item.title}</ContactText>
          </ContactItem>
        ))}
      </ContactGrid>
    </ContactSection>
  );
}; 