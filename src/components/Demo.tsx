import GithubLogo from '../assets/github.svg';
import AmplifyLogo from '../assets/amplify.svg';
import NodeLogo from '../assets/node.svg';
import YarnLogo from '../assets/yarn.svg';
import ViteLogo from '../assets/vite.svg';
import ReactLogo from '../assets/react.svg';
import TypeScriptLogo from '../assets/typescript.svg';
import ExpressLogo from '../assets/express.svg';
import ReactRouterLogo from '../assets/react-router.svg';
import TailwindLogo from '../assets/tailwind.svg';
import ESLintLogo from '../assets/eslint.svg';
import PrettierLogo from '../assets/prettier.svg';
import { Tweet } from './Tweet';
import { TweetSkeleton } from 'react-tweet';

const AnimatedLine = () => <div className='h-1 bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse rounded-full w-full mx-5'></div>;

export const RepoBanner = ({ repo }: { repo: string }) => {
  return (
    <div className='bg-white dark:bg-[#0d1117] text-[#24292f] dark:text-[#c9d1d9] px-4 py-6 rounded-lg shadow-md w-full max-w-2xl mx-auto m-4 border border-[#d0d7de] dark:border-[#30363d]'>
      <a className='group text-2xl font-bold mb-4 text-center flex items-center justify-center gap-2' href={`https://github.com/${repo}`} target='_blank' rel='noopener noreferrer'>
        <GithubLogo className='w-5 h-5' />
        <span className='group-hover:underline'>{repo}</span>
      </a>
      <p className='text-sm text-center mb-4'>Vite template with SSR + Express APIs + Amplify Hosting</p>
      <div className='flex items-center justify-between text-sm mt-4'>
        <a
          href='https://github.com/new?template_name=vite-amplify&template_owner=bebeal&name=vite-amplify-deploy'
          className='flex items-center space-x-2 group hover:bg-[#f6f8fa] dark:hover:bg-[#21262d] rounded-md p-3 border border-transparent hover:border-[#d0d7de] dark:hover:border-[#30363d]'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='bg-[#e1e4e8] dark:bg-[#21262d] rounded-md p-2 group-hover:bg-[#0969da] group-hover:text-white'>
            <svg xmlns='http://www.w3.org/2000/svg' height='20' width='20' viewBox='0 0 24 24' className=''>
              <path
                fill='currentColor'
                d='M8.75 19.25a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0M15 4.75a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0m-12.5 0a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0M5.75 6.5a1.75 1.75 0 1 0-.001-3.501A1.75 1.75 0 0 0 5.75 6.5M12 21a1.75 1.75 0 1 0-.001-3.501A1.75 1.75 0 0 0 12 21m6.25-14.5a1.75 1.75 0 1 0-.001-3.501A1.75 1.75 0 0 0 18.25 6.5'
              ></path>
              <path
                fill='currentColor'
                d='M6.5 7.75v1A2.25 2.25 0 0 0 8.75 11h6.5a2.25 2.25 0 0 0 2.25-2.25v-1H19v1a3.75 3.75 0 0 1-3.75 3.75h-6.5A3.75 3.75 0 0 1 5 8.75v-1Z'
              ></path>
              <path fill='currentColor' d='M11.25 16.25v-5h1.5v5z'></path>
            </svg>
          </div>
          <div>
            <p className='font-semibold'>Create</p>
            <p className='text-xs text-[#57606a] dark:text-[#8b949e] font-medium text-nowrap'>GitHub Template</p>
          </div>
        </a>
        <AnimatedLine />
        <a
          href='https://console.aws.amazon.com/amplify/create/repo-branch'
          className='flex items-center space-x-2 group hover:bg-[#f6f8fa] dark:hover:bg-[#21262d] rounded-md p-3 border border-transparent hover:border-[#d0d7de] dark:hover:border-[#30363d]'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div>
            <p className='font-semibold text-right'>Deploy</p>
            <p className='text-xs text-[#57606a] dark:text-[#8b949e] text-right font-medium text-nowrap'>Amplify Hosting</p>
          </div>
          <div className='bg-[#e1e4e8] dark:bg-[#21262d] rounded-md p-2 group-hover:bg-[#DD344C] group-hover:text-white'>
            <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 256 191' className=''>
              <defs>
                <linearGradient id='logosAwsAmplify0' x1='100%' x2='0%' y1='22.172%' y2='77.828%'>
                  <stop offset='0%' stopColor='currentColor'></stop>
                  <stop offset='100%' stopColor='currentColor'></stop>
                </linearGradient>
              </defs>
              <path
                fill='url(#logosAwsAmplify0)'
                d='M55.71 158.476h72.106l18.47 32.508H0l51.364-89.006L72.89 64.706l18.48 32.022zM82.6 47.85l17.744-30.746l100.42 173.88h-35.562zM110.221 0h35.516L256 190.984h-35.56z'
              ></path>
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
};

const FeatureIcons = [
  { Logo: AmplifyLogo, href: 'https://docs.aws.amazon.com/amplify/latest/userguide', label: 'Amplify' },
  { Logo: NodeLogo, href: 'https://nodejs.org/docs', label: 'Node' },
  { Logo: YarnLogo, href: 'https://classic.yarnpkg.com/en/docs', label: 'Yarn' },
  { Logo: ViteLogo, href: 'https://vitejs.dev/guide/', label: 'Vite' },
  { Logo: ReactLogo, href: 'https://react.dev/reference/react', label: 'React' },
  { Logo: TypeScriptLogo, href: 'https://www.typescriptlang.org/docs/', label: 'TypeScript' },
  { Logo: ExpressLogo, href: 'https://expressjs.com/en/4x/api.html', label: 'Express' },
  { Logo: ReactRouterLogo, href: 'https://reactrouter.com/en/main', label: 'React Router' },
  { Logo: TailwindLogo, href: 'https://tailwindcss.com/docs', label: 'Tailwind' },
  { Logo: ESLintLogo, href: 'https://eslint.org/docs/latest/', label: 'ESLint' },
  { Logo: PrettierLogo, href: 'https://prettier.io/docs/en/index.html', label: 'Prettier' },
];

export const FeaturesList = () => (
  <div className='flex flex-1 flex-wrap justify-center items-center content-center gap-2 text-black dark:text-white h-auto'>
    {FeatureIcons.map(({ Logo, href, label }) => (
      <div key={label} className='flex flex-col items-center p-2 gap-2 leading-none'>
        <a href={href} target='_blank' rel='noopener noreferrer' className='transition-transform hover:scale-110'>
          <Logo className='w-14 h-14' />
        </a>
        <span className='text-xs'>{label}</span>
      </div>
    ))}
  </div>
);

const TweetApiDemo = () => (
  <div className='flex w-auto h-auto flex-grow justify-around items-center gap-1 flex-col sm:flex-row'>
    <div className='h-4/5'>
      <TweetSkeleton />
    </div>
    <Tweet id='1775175303284797538' />
  </div>
);

export const ApiRoutes = () => {
  return (
    <div className='flex flex-col w-full h-auto sm:justify-between items-center sm:gap-4 sm:flex-row'>
      <div className='flex w-auto flex-grow justify-center flex-col items-center'>
        <div className='text-xl font-bold mb-4'>API Routes</div>
        <ul className='list-disc w-auto justify-center'>
          {["api/tweet/:id"].map((route, index) => (
            <li key={index}>
              <a href={route.replace(':id', '1810310734091571240')} className='text-blue-400 hover:underline'>
                {route}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <TweetApiDemo />
    </div>
  );
};

export const Demo = ({ repo }: { repo: string }) => {
  return (
    <>
      <RepoBanner repo={repo} />
      <FeaturesList />
      <ApiRoutes />
    </>
  );
};
