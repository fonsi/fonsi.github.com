export interface SideProject {
  id: string;
  name: string;
  url: string | null;
  imageSrc: string;
  imageAlt: string;
  description: string;
  implementation: string;
}

export const sideProjects: SideProject[] = [
  {
    id: 'jobmeerkat',
    name: 'Jobmeerkat',
    url: 'https://jobmeerkat.com',
    imageSrc: '/side-projects/jobmeerkat-screenshot.webp',
    imageAlt: 'Jobmeerkat project preview',
    description:
      'A job board focused on remote roles with transparent salary information. New job listings are scraped daily from company career pages and analyzed with AI to estimate salary ranges and extract relevant details.',
    implementation:
      'A statically generated website built with TanStack Start and Styled Components. Each day, career pages from more than 50 companies are scraped, and new jobs are processed with AI and stored. The site is then rebuilt and deployed. The backend is fully serverless, using AWS services such as Lambda, SQS, and DynamoDB.',
  },
  {
    id: 'parne',
    name: 'Parne',
    url: null,
    imageSrc: '/side-projects/parne-screenshot.webp',
    imageAlt: 'Parne project preview',
    description:
      'A personal finance app focused on recurring payments. It also allows users to track one-time expenses, providing a clear overview of their spending not only for the current month but also for future months.',
    implementation:
      'A statically generated web app built with TanStack Start and shadcn/ui. It follows a local-first approach using IndexedDB for fast data access and offline support. Data is encrypted at rest and stored in Supabase, accessed through a REST API built with AWS Lambda.',
  },
  {
    id: 'gridchecker',
    name: 'GridChecker',
    url: null,
    imageSrc: '/side-projects/gridchecker-screenshot.webp',
    imageAlt: 'GridChecker project preview',
    description:
      'A companion app for the iRacing simulator that allows users to rate their rivals. When racing against the same drivers again, users can review past interactions and read notes about their driving style.',
    implementation:
      'An Electron app for Windows that integrates with the iRacing SDK to collect race data in real time. It also connects to the iRacing API through a REST API built with AWS Lambda.',
  },
];
