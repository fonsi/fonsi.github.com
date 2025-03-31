import styled from 'styled-components';

const HeroSection = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 3rem;
  position: relative;
  margin: 4rem auto;
  max-width: 1200px;
  padding: 0 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin: 2rem auto;
    padding: 0 1rem;
    place-items: center;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeroImageWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const HeroImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: contain;
  transition: transform 0.3s ease;
  mix-blend-mode: multiply;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    width: 240px;
    height: 240px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 5rem;
  color: #212529;
  margin-bottom: 1rem;
  font-weight: 700;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

const HeroSubtitle = styled.h2`
  font-size: 3rem;
  color: #495057;
  font-weight: 500;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Hero = () => {
  return (
    <HeroSection>
      <HeroImageWrapper>
        <HeroImage src="/fonsi.avif" alt="Alfonso Salado" />
      </HeroImageWrapper>
      <HeroContent>
        <HeroTitle>Alfonso Salado</HeroTitle>
        <HeroSubtitle>Product Engineer</HeroSubtitle>
      </HeroContent>
    </HeroSection>
  );
}; 