import styled from 'styled-components';
import { sideProjects } from '../data/sideProjects';

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
`;

const ProjectCard = styled.article`
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem 1rem;
  margin-bottom: 1rem;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  display: block;
  background-color: #f8f9fa;
  box-shadow:
    0 6px 16px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  color: #212529;
  margin: 0;
`;

const ProjectLink = styled.a`
  color: #495057;
  font-size: 0.9375rem;
  text-decoration: underline;
  text-underline-offset: 2px;

  &:hover {
    color: #212529;
  }
`;

const SectionLabel = styled.h4`
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #adb5bd;
  margin: 1rem 0 0.5rem;

  &:first-of-type {
    margin-top: 0;
  }
`;

const BodyText = styled.p`
  color: #495057;
  line-height: 1.6;
  margin: 0;
`;

const ClosedSpan = styled.span`
  color: #495057;
  font-size: 0.9375rem;
  font-style: italic;
`;

export const SideProjects = () => (
  <List>
    {sideProjects.map((project) => (
      <ProjectCard key={project.id}>
        <ProjectHeader>
          <ProjectTitle>{project.name}</ProjectTitle>
          {project.url ? (
          <ProjectLink href={project.url} target="_blank" rel="noopener noreferrer">
              {project.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
            </ProjectLink>
          ) : <ClosedSpan>Closed</ClosedSpan>}
        </ProjectHeader>
        <ProjectImage src={project.imageSrc} alt={project.imageAlt} loading="lazy" />
        <SectionLabel>About</SectionLabel>
        <BodyText>{project.description}</BodyText>
        <SectionLabel>How it was implemented</SectionLabel>
        <BodyText>{project.implementation}</BodyText>
      </ProjectCard>
    ))}
  </List>
);
