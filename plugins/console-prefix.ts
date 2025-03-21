import type { Plugin } from 'vite';

export const consolePrefix = (prefix: string) => {
  let originalConsoleLog: (...args: unknown[]) => void;

  // Hard-coded colors for known prefixes
  const getColor = () => {
    if (prefix === '[server]') return '\x1b[35m'; // Magenta for server
    if (prefix === '[app]') return '\x1b[36m'; // Cyan for client
    return '\x1b[33m'; // Default to yellow for anything else
  };

  return {
    name: 'console-prefix',
    apply: 'build',
    configResolved() {
      // Save the original console.log function
      originalConsoleLog = console.log;
      console.log = (...args) => {
        const color = getColor();
        originalConsoleLog(`${color}${prefix}\x1b[0m`, '   ', ...args);
      };
    },
    closeBundle() {
      // Restore the original console.log function
      console.log = originalConsoleLog;
    },
  } satisfies Plugin;
};
