import { Demo } from './components/Demo';
import { ThemeToggle } from './components/ThemeToggle';

const App = () => {
  const repo = 'bebeal/vite-amplify';
  return (
    <div className='w-full h-screen flex flex-col transition-all duration-300 overflow-auto'>
      <Demo repo={repo} />
      <ThemeToggle />
    </div>
  );
};

export default App;
