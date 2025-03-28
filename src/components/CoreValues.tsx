import styled from 'styled-components';
import { coreValues } from '../data/coreValues';

interface CoreValuesItem {
  name: string;
  description: string;
}

const CoreValuesSection = styled.div`
  margin: 2rem 0;
  padding: 1.5rem;
  background-color: #f8f9fa;
  border-radius: 0.5rem;
`;

const CoreValuesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CoreValuesCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  text-align: left;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const CoreValuesCardTitle = styled.h4`
  font-size: 1.1rem;
  color: #212529;
  font-weight: 600;
  text-align: left;
`;

const CoreValuesCardDescription = styled.p`
  color: #495057;
  font-size: 1rem;
  line-height: 1.6;
  text-align: left;
`;

export const CoreValues = () => {
  return (
    <CoreValuesSection>
      <CoreValuesList>
        {coreValues.map((item: CoreValuesItem, idx: number) => (
          <CoreValuesCard key={idx}>
            <CoreValuesCardTitle>{item.name}</CoreValuesCardTitle>
            <CoreValuesCardDescription>{item.description}</CoreValuesCardDescription>
          </CoreValuesCard>
        ))}
      </CoreValuesList>
    </CoreValuesSection>
  );
};