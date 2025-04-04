import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { Layout } from './components/Layout';
import { Timeline } from './components/Timeline';
import { CoreValues } from './components/CoreValues';
import { Tech } from './components/Tech';
import { Contact } from './components/Contact';
import { Hero } from './components/Hero';

const SectionContent = styled.div`
  max-width: 800px;
  width: 100%;
  text-align: center;
`;

const HeroSectionContent = styled(SectionContent)`
  @media (min-width: 768px) {
    max-width: 900px;
  }

  @media (min-width: 1280px) {
    max-width: 1024px;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #212529;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #6c757d;
  margin-bottom: 2rem;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <HeroSectionContent>
          <Hero />
        </HeroSectionContent>

        <SectionContent>
          <Title>Core Values</Title>
          <Subtitle>These are the values that guide my work</Subtitle>
          <CoreValues />
        </SectionContent>

        <SectionContent>
          <Title>Tech Stack</Title>
          <Subtitle>Main technologies I work with</Subtitle>
          <Tech />
        </SectionContent>

        <SectionContent>
          <Title>Experience</Title>
          <Subtitle>My professional journey</Subtitle>
          <Timeline />
        </SectionContent>

        <SectionContent>
          <Title>Get in Touch</Title>
          <Subtitle>You can find me here</Subtitle>
          <Contact />
        </SectionContent>
      </Layout>
    </>
  );
};

export default App;
