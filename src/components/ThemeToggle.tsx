import { useTheme } from 'next-themes';
import { useCallback, useEffect, useState } from 'react';

const getBoxShadow = (theme?: string, resolvedTheme?: string) => {
  const isLight = resolvedTheme === 'light';
  const baseColor = resolvedTheme !== 'light' ? '#0d1117' : '#e1e4e8';

  const thumbLeft = `calc(1rem * -1) 0 0 2px ${baseColor} inset, 0 0 0 2px ${baseColor} inset`;
  const thumbMiddle = `calc(1rem / 2) 0 0 2px ${baseColor} inset, calc(1rem / -2) 0 0 2px ${baseColor} inset, 0 0 0 2px ${baseColor} inset`;
  const thumbRight = `1rem 0 0 2px ${baseColor} inset, 0 0 0 2px ${baseColor} inset`;

  if (theme === 'system') {
    return thumbMiddle;
  } else {
    return isLight ? thumbLeft : thumbRight;
  }
};

export const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme, themes } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => setMounted(true), []);

  const cycleTheme = useCallback(() => {
    const nextIndex = themes.indexOf(theme || '') + 1;
    const newTheme = themes[nextIndex % themes.length];
    setTheme(newTheme);
  }, [setTheme, themes, theme, resolvedTheme]);

  if (!mounted) return null;
  return (
    <div className='absolute top-2 right-0 p-4 z-[100]'>
      <div onClick={cycleTheme} className='relative flex w-auto h-auto justify-center items-center gap-1 pointer-events-auto'>
        <div
          className={`appearance-none border border-[currentColor] rounded-[1.9rem] h-[1.25rem] min-w-[2.25rem] cursor-pointer duration-300 ease-in-out transition-shadow`}
          style={{
            background: resolvedTheme === 'light' ? '#0d1117' : '#e1e4e8',
            boxShadow: getBoxShadow(theme, resolvedTheme),
          }}
        />
      </div>
    </div>
  );
};
