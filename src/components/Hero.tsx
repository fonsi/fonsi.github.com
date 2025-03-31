import styled from 'styled-components';

const HeroSection = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin: 4rem 0;
  padding-left: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 2rem 0;
    padding-left: 1rem;
  }
`;

const HeroImage = styled.img`
  width: 320px;
  height: 320px;
  object-fit: cover;
  z-index: 1;

  @media (max-width: 768px) {
    width: 240px;
    height: 240px;
    margin-bottom: 1rem;
  }
`;

const HeroContent = styled.div`
  margin-left: -4rem;
  padding: 2rem;
  z-index: 2;

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 1rem;
    text-align: center;
  }
`;

const HeroTitle = styled.h1`
  font-size: 4.5rem;
  color: #212529;
  margin-bottom: 1rem;
  font-weight: 700;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroSubtitle = styled.h2`
  font-size: 2.5rem;
  color: #495057;
  font-weight: 500;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const Hero = () => {
  return (
    <HeroSection>
      <HeroImage src="/fonsi.avif" alt="Alfonso Salado" />
      <HeroContent>
        <HeroTitle>Alfonso Salado</HeroTitle>
        <HeroSubtitle>Product Engineer</HeroSubtitle>
      </HeroContent>
    </HeroSection>
  );
}; 