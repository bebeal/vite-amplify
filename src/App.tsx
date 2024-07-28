import { ApiRoutes, RepoBanner, FeaturesList } from './components/Demo';
import { ThemeToggle } from './components/ThemeToggle';

const App = () => {
  const repo = 'bebeal/vite-amplify';
  return (
    <div className='w-full h-screen flex flex-col transition-all duration-300 overflow-auto'>
      <RepoBanner repo={repo} />
      <FeaturesList />
      <ApiRoutes />
      <ThemeToggle />
    </div>
  );
};

export default App;
