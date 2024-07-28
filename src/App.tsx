import { ApiRoutes, RepoBanner, FeaturesList } from './components/Demo';

const App = () => {
  const repo = 'bebeal/vite-amplify';
  return (
    <div className='w-full h-screen flex flex-col transition-all duration-500 overflow-auto'>
      <RepoBanner repo={repo} />
      <FeaturesList />
      <ApiRoutes />
    </div>
  );
};

export default App;
