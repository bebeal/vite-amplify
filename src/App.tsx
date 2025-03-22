import { DemoPage } from './components/DemoPage';
import { ThemeToggle } from './components/ThemeToggle/ThemeToggle';

const App = () => {
  return (
    <div className='w-full h-screen flex flex-col transition-all duration-300 overflow-auto'>
      <ThemeToggle />
      <DemoPage repo="bebeal/vite-amplify" />
    </div>
  );
};

export default App;
