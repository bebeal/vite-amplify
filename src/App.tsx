import { FC, SVGProps } from 'react';
import NodeLogo from './assets/node.svg';
import YarnLogo from './assets/yarn.svg';
import ViteLogo from './assets/vite.svg';
import ReactLogo from './assets/react.svg';
import TypeScriptLogo from './assets/typescript.svg';
import ExpressLogo from './assets/express.svg';
import TailwindLogo from './assets/tailwind.svg';
import ReactRouterLogo from './assets/react-router.svg';
import ESLintLogo from './assets/eslint.svg';

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
];

const App = () => (
  <div className="w-full h-full p-4 overflow-auto flex justify-center items-center">
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
  </div>
);

export default App;
