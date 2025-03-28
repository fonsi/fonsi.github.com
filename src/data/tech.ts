import ReactIcon from '../components/icons/React.svg';
import TypeScriptIcon from '../components/icons/TypeScript.svg';
import ReduxIcon from '../components/icons/Redux.svg';
import SassIcon from '../components/icons/Sass.svg';
import JestIcon from '../components/icons/Jest.svg';
import WebpackIcon from '../components/icons/Webpack.svg';
import GitIcon from '../components/icons/Git.svg';
import GitLabIcon from '../components/icons/GitLab.svg';
import AWSIcon from '../components/icons/AWS.svg';
import FigmaIcon from '../components/icons/Figma.svg';
import SlackIcon from '../components/icons/Slack.svg';
import SeleniumIcon from '../components/icons/Selenium.svg';
import NodeIcon from '../components/icons/Node.js.svg';

interface Technology {
  title: string;
  icon: string;
}

interface TechStack {
  primary: Technology[];
  secondary: Technology[];
  tertiary: Technology[];
}

export const tech: TechStack = {
  primary: [
    {
      title: 'React',
      icon: ReactIcon,
    },
    {
      title: 'TypeScript',
      icon: TypeScriptIcon,
    },
    {
        title: 'Sass',
        icon: SassIcon,
    },
  ],
  secondary: [
    {
      title: 'Webpack',
      icon: WebpackIcon,
    },
    {
        title: 'Jest',
        icon: JestIcon,
      },
      {
        title: 'Redux',
        icon: ReduxIcon,
      },
      {
        title: 'Git',
        icon: GitIcon,
    },
  ],
  tertiary: [
    {
        title: 'Selenium',
        icon: SeleniumIcon,
      },
      {
        title: 'Node.js',
        icon: NodeIcon,
      },
    {
      title: 'GitLab',
      icon: GitLabIcon,
    },
    {
      title: 'AWS',
      icon: AWSIcon,
    },
    {
      title: 'Figma',
      icon: FigmaIcon,
    },
    {
      title: 'Slack',
      icon: SlackIcon,
    },
  ],
};
