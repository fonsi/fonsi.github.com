import { useEffect, useState, Children, useRef } from 'react';
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
  min-height: 100vh;
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  opacity: ${props => props.isActive ? 1 : 0.3};
  transform: ${props => props.isActive ? 'scale(1)' : 'scale(0.95)'};
  transition: all 0.5s ease;
`;

const BurgerButton = styled.button`
  display: none;
  position: fixed;
  right: 1rem;
  top: 1rem;
  z-index: 101;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border: none;
  border-radius: 0.5rem;
  padding: 1rem 0.75rem;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    display: block;
  }
`;

const BurgerIcon = styled.div<{ isOpen: boolean }>`
  width: 24px;
  height: 2px;
  position: relative;
  transition: all 0.3s ease;
  left: 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 2px;
    background-color: #212529;
    transition: all 0.3s ease;
    left: 0;
  }

  &::before {
    top: -8px;
    transform: ${props => props.isOpen ? 'translateY(8px) rotate(45deg)' : 'none'};
  }

  &::after {
    bottom: -8px;
    transform: ${props => props.isOpen ? 'translateY(-8px) rotate(-45deg)' : 'none'};
  }
`;

const CenterLine = styled.div<{ isOpen: boolean }>`
  width: 24px;
  height: 2px;
  background-color: #212529;
  position: absolute;
  left: 0;
  top: 0;
  opacity: ${props => props.isOpen ? 0 : 1};
  transform: ${props => props.isOpen ? 'scaleX(0)' : 'scaleX(1)'};
  transition: all 0.3s ease;
`;

const Sidebar = styled.nav<{ isOpen: boolean }>`
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
  transition: all 0.3s ease;

  @media (max-width: 1024px) {
    right: ${props => props.isOpen ? '0' : '-100%'};
    top: 0;
    transform: none;
    height: 100vh;
    width: 250px;
    border-radius: 0;
    padding-top: 4rem;
  }
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

const sections = ['Home', 'Core Values', 'Tech', 'Jobs', 'Contact'];

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [activeSection, setActiveSection] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-45% 0px -45% 0px',
      threshold: 0
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionIndex = sectionsRef.current.indexOf(entry.target as HTMLElement);
          setActiveSection(sectionIndex);
        }
      });
    }, options);

    sectionsRef.current = Array.from(document.querySelectorAll('section')) as HTMLElement[];
    sectionsRef.current.forEach((section) => {
      observerRef.current?.observe(section);
    });

    // Initial check for active section
    const checkActiveSection = () => {
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY + (viewportHeight / 2);

      sectionsRef.current.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(index);
        }
      });
    };

    // Check on scroll
    window.addEventListener('scroll', checkActiveSection);
    // Initial check
    checkActiveSection();

    return () => {
      window.removeEventListener('scroll', checkActiveSection);
      sectionsRef.current.forEach((section) => {
        observerRef.current?.unobserve(section);
      });
    };
  }, []);

  const scrollToSection = (index: number) => {
    sectionsRef.current[index].scrollIntoView({ behavior: 'smooth' });
    setActiveSection(index);
    setIsSidebarOpen(false);
  };

  return (
    <LayoutContainer>
      <BurgerButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <BurgerIcon isOpen={isSidebarOpen}>
          <CenterLine isOpen={isSidebarOpen} />
        </BurgerIcon>
      </BurgerButton>
      <MainContent>
        {Children.map(children, (child, index) => (
          <Section isActive={activeSection === index}>
            {child}
          </Section>
        ))}
      </MainContent>
      <Sidebar isOpen={isSidebarOpen}>
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