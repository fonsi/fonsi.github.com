import { useEffect, useState, Children } from 'react';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f8f9fa;
`;

const MainContent = styled.main`
  flex: 1;
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
`;

const Section = styled.section<{ isActive: boolean }>`
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  opacity: ${props => props.isActive ? 1 : 0.5};
  transition: opacity 0.3s ease;
`;

const Sidebar = styled.nav`
  position: fixed;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NavItem = styled.li<{ isActive: boolean }>`
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
  color: ${props => props.isActive ? '#212529' : '#6c757d'};
  background: ${props => props.isActive ? 'rgba(0, 0, 0, 0.05)' : 'transparent'};
  font-weight: ${props => props.isActive ? '600' : '400'};

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

interface LayoutProps {
  children: React.ReactNode;
}

const sections = ['Home', 'Tech', 'Jobs', 'Projects', 'Contact'];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const sections = document.querySelectorAll('section');
    sections[index].scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <LayoutContainer>
      <MainContent>
        {Children.map(children, (child, index) => (
          <Section isActive={activeSection === index}>
            {child}
          </Section>
        ))}
      </MainContent>
      <Sidebar>
        <NavList>
          {sections.map((section, index) => (
            <NavItem
              key={section}
              isActive={activeSection === index}
              onClick={() => scrollToSection(index)}
            >
              {section}
            </NavItem>
          ))}
        </NavList>
      </Sidebar>
    </LayoutContainer>
  );
};

export default Layout; 