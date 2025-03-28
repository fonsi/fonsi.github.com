import styled from 'styled-components';
import { tech } from '../data/tech';

const TechSection = styled.div`
  margin: 2rem 0;
  padding: 1.5rem;
  background-color: #f8f9fa;
  border-radius: 0.5rem;

  @media (max-width: 768px) {
    padding: 1rem;
    margin: 1rem 0;
  }
`;

const TechGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 3.5rem;
  width: 100%;
  padding: 1.5rem;
  border-radius: 0.5rem;
  position: relative;

  &:nth-child(1) {
    background-color: #ffffff;
    border: 1px solid #dee2e6;
  }

  &:nth-child(2) {
    background-color: #f8f9fa;
    border: 1px solid #dee2e6;
  }

  &:nth-child(3) {
    background-color: #e9ecef;
  }

  &:last-child {
    margin-bottom: 0;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    gap: 1.5rem;
    margin-bottom: 2.5rem;
    justify-content: center;
    padding: 1rem;

    &:last-child {
      gap: 0.75rem;
    }
  }
`;

const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
  min-width: 100px;
  max-width: 150px;

  &:last-child {
    min-width: 80px;
    max-width: 100px;
  }

  @media (max-width: 768px) {
    min-width: 80px;
    max-width: 100px;
    flex: 0 0 auto;
  }
`;

const PrimaryIcon = styled.img`
  width: 4.5rem;
  height: 4.5rem;

  @media (max-width: 768px) {
    width: 3.5rem;
    height: 3.5rem;
  }
`;

const SecondaryIcon = styled.img`
  width: 3rem;
  height: 3rem;

  @media (max-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

const TertiaryIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;

  @media (max-width: 768px) {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const TechName = styled.span`
  font-size: 0.875rem;
  color: #495057;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

export const Tech = () => {
  return (
    <TechSection>
      <TechGroup>
        {tech.primary.map((item, idx) => (
          <TechItem key={idx}>
            <PrimaryIcon src={item.icon} alt={item.title} />
            <TechName>{item.title}</TechName>
          </TechItem>
        ))}
      </TechGroup>
      <TechGroup>
        {tech.secondary.map((item, idx) => (
          <TechItem key={idx}>
            <SecondaryIcon src={item.icon} alt={item.title} />
            <TechName>{item.title}</TechName>
          </TechItem>
        ))}
      </TechGroup>
      <TechGroup>
        {tech.tertiary.map((item, idx) => (
          <TechItem key={idx}>
            <TertiaryIcon src={item.icon} alt={item.title} />
            <TechName>{item.title}</TechName>
          </TechItem>
        ))}
      </TechGroup>
    </TechSection>
  );
}; 