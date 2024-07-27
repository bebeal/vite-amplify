import { FC, SVGProps, useEffect, useState } from 'react';
import NodeLogo from './assets/node.svg';
import YarnLogo from './assets/yarn.svg';
import ViteLogo from './assets/vite.svg';
import ReactLogo from './assets/react.svg';
import TypeScriptLogo from './assets/typescript.svg';
import ExpressLogo from './assets/express.svg';
import TailwindLogo from './assets/tailwind.svg';
import ReactRouterLogo from './assets/react-router.svg';
import ESLintLogo from './assets/eslint.svg';
import AmplifyLogo from './assets/amplify.svg';

const icons: { Logo: FC<SVGProps<SVGSVGElement> & { title?: string }>, href: string, label: string }[] = [
  { Logo: NodeLogo, href: "https://nodejs.org/docs", label: "Node" },
  { Logo: YarnLogo, href: "https://classic.yarnpkg.com/en/docs", label: "Yarn" },
  { Logo: ViteLogo, href: "https://vitejs.dev/guide/", label: "Vite" },
  { Logo: ReactLogo, href: "https://react.dev/reference/react", label: "React" },
  { Logo: TypeScriptLogo, href: "https://www.typescriptlang.org/docs/", label: "TypeScript" },
  { Logo: ExpressLogo, href: "https://expressjs.com/en/4x/api.html", label: "Express" },
  { Logo: TailwindLogo, href: "https://tailwindcss.com/docs", label: "Tailwind" },
  { Logo: ReactRouterLogo, href: "https://reactrouter.com/en/main", label: "React Router" },
  { Logo: ESLintLogo, href: "https://eslint.org/docs/latest/", label: "ESLint" },
  { Logo: AmplifyLogo, href: "https://docs.aws.amazon.com/amplify/latest/userguide", label: "Amplify" },
];

const App = () => {
  const [apiRoutes, setApiRoutes] = useState<string[]>([]);

  useEffect(() => {
    fetch('/api')
      .then(response => response.json())
      .then(data => {
        if (data.routes) {
          setApiRoutes(data.routes);
        }
      })
      .catch(error => console.error('Error fetching API routes:', error));
  }, []);

  if (!apiRoutes.length) {
    return <div>Loading...</div>;
  }
  return (
    <div className="w-full h-screen flex flex-col justify-around p-4 transition-all duration-500 overflow-auto">
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 text-black dark:text-white">
        {icons.map(({ Logo, href, label }) => (
          <div key={label} className="flex flex-col items-center p-4 gap-1 font-bold">
            <a href={href} target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-125">
              <Logo className="w-16 h-16" />
            </a>
            <span className="mt-2 text-xs">{label}</span>
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <ul className="list-disc p-0">
          {apiRoutes.map((route, index) => (
            <li key={index} className="mb-2">
              <a href={route.replace(':id', '1810310734091571240')} className="text-blue-400 hover:underline">{route}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
