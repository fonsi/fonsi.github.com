import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layout';

const SectionContent = styled.div`
  max-width: 800px;
  width: 100%;
  text-align: center;
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
        <SectionContent>
          <Title>Welcome to My Portfolio</Title>
          <Subtitle>Product Engineer & Full Stack Developer</Subtitle>
        </SectionContent>

        <SectionContent>
          <Title>Tech Stack</Title>
          <Subtitle>Technologies I work with</Subtitle>
        </SectionContent>

        <SectionContent>
          <Title>Experience</Title>
          <Subtitle>My professional journey</Subtitle>
        </SectionContent>

        <SectionContent>
          <Title>Projects</Title>
          <Subtitle>Featured work and side projects</Subtitle>
        </SectionContent>

        <SectionContent>
          <Title>Get in Touch</Title>
          <Subtitle>Let's work together</Subtitle>
        </SectionContent>
      </Layout>
    </>
  );
};

export default App;
