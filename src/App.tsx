import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

const App = () => {
  return (
    <div className="w-full h-full items-center justify-center gap-4 prose-sm prose-zinc p-16">
      <div className="flex gap-1 justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} alt="Vite logo" className="" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} alt="React logo" className="" />
        </a>
      </div>
      <h1>Node 20 + Yarn 4 + Vite 5 + React 18 + TypeScript 5 + Express 4 + Tailwind 3 + React Router 6 + Eslint 9</h1>
    </div>
  )
}

export default App;
