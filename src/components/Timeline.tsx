import styled from 'styled-components';
import { jobs } from '../data/jobs';

const TimelineContainer = styled.div`
  max-width: 800px;
  width: 100%;
  position: relative;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background-color: #e9ecef;
  }

  @media (max-width: 768px) {
    &::before {
      left: .2rem;
      transform: none;
    }
  }
`;

const TimelineItem = styled.div<{ isLeft?: boolean }>`
  width: 50%;
  padding: 2rem 1rem;
  position: relative;
  margin-left: ${props => props.isLeft ? '0' : 'auto'};
  margin-bottom: 2rem;

  &::before {
    content: '';
    position: absolute;
    width: 2rem;
    height: 2px;
    background-color: #e9ecef;
    top: 50%;
    ${props => props.isLeft ? 'right: -2rem;' : 'left: -2rem;'}
    transform: translateY(-50%);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 0.5rem 1.5rem 1.5rem;
    margin-left: 0;

    &::before {
      display: none;
    }
  }
`;

const JobCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const JobTitle = styled.h3`
  font-size: 1.25rem;
  color: #212529;
  margin-bottom: 0.5rem;
`;

const JobCompany = styled.h4`
  font-size: 1rem;
  color: #6c757d;
  margin-bottom: 0.5rem;
`;

const JobLocation = styled.span`
  font-size: 0.875rem;
  color: #adb5bd;
  display: block;
  margin-bottom: 1rem;
`;

const JobDescription = styled.p`
  color: #495057;
  margin-bottom: 1rem;
  line-height: 1.6;
  text-align: left;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  background-color: #e9ecef;
  color: #495057;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
`;

const DateContainer = styled.div<{ isLeft?: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.isLeft ? 'left: calc(100% + 2rem);' : 'right: calc(100% + 2rem);'}
  color: #adb5bd;
  font-size: 0.875rem;
  white-space: nowrap;

  @media (max-width: 768px) {
    position: relative;
    top: 0;
    transform: none;
    left: 0;
    right: auto;
    margin-bottom: 0.5rem;
    text-align: left;
  }
`;

const Timeline = () => {
  return (
    <TimelineContainer>
      {jobs.map((job, index) => (
        <TimelineItem key={job.company} isLeft={index % 2 === 0}>
          <DateContainer isLeft={index % 2 === 0}>
            {new Date(job.from).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - 
            {job.to === 'current' ? ' Present' : ` ${new Date(job.to).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}`}
          </DateContainer>
          <JobCard>
            <JobTitle>{job.title}</JobTitle>
            <JobCompany>{job.company}</JobCompany>
            <JobLocation>{job.location}</JobLocation>
            <JobDescription>{job.description}</JobDescription>
            <TechStack>
              {job.techStack.map((tech) => (
                <TechTag key={tech}>{tech}</TechTag>
              ))}
            </TechStack>
          </JobCard>
        </TimelineItem>
      ))}
    </TimelineContainer>
  );
};

export default Timeline; 