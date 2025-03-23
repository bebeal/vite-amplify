import { useTheme } from 'next-themes';
import { useCallback, useEffect, useState } from 'react';

const getBoxShadow = (theme, resolvedTheme) => {
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
  const [mounted, setMounted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => setMounted(true), []);

  const cycleTheme = useCallback(() => {
    const nextIndex = themes.indexOf(theme || '') + 1;
    const newTheme = themes[nextIndex % themes.length];
    setTheme(newTheme);
  }, [setTheme, themes, theme, resolvedTheme]);

  if (!mounted) return null;

  return (
    <div className='absolute top-2 right-0 p-4 z-[100]'>
      <div
        onClick={cycleTheme}
        className='relative flex w-auto h-auto justify-center items-center gap-1'
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <div
          className='appearance-none border border-[currentColor] rounded-[1.9rem] h-[1.25rem] min-w-[2.25rem] cursor-pointer'
          style={{
            background: resolvedTheme === 'light' ? '#0d1117' : '#e1e4e8',
            boxShadow: getBoxShadow(theme, resolvedTheme),
            transition: 'box-shadow 300ms cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          {/* Tooltip */}
          {showTooltip && (
            <div
              className='absolute text-xs whitespace-nowrap transform -translate-x-1/2 pointer-events-none select-none'
              style={{
                top: '100%',
                left: theme === 'light' ? '10%' : theme === 'system' ? '50%' : '90%',
                background: resolvedTheme === 'dark' ? '#0d1117' : 'white',
                color: resolvedTheme === 'dark' ? '#c9d1d9' : '#24292f',
                fontSize: '0.65rem',
                padding: '2px 4px',
                borderRadius: '3px',
                marginTop: '5px',
                transition: 'left 300ms cubic-bezier(0.34, 1.56, 0.64, 1)',
                border: resolvedTheme === 'dark' ? '1px solid #30363d' : '1px solid #d0d7de',
                boxShadow: '0 1px 0 rgba(0,0,0,0.1)',
              }}
            >
              {theme || 'system'}
              {/* Arrow */}
              <div
                className='absolute w-0 h-0'
                style={{
                  top: '-4px',
                  left: '50%',
                  marginLeft: '-4px',
                  borderLeft: '4px solid transparent',
                  borderRight: '4px solid transparent',
                  borderBottom: resolvedTheme === 'dark' ? '4px solid #30363d' : '4px solid #d0d7de',
                }}
              />
              {/* Inner arrow for border effect */}
              <div
                className='absolute w-0 h-0'
                style={{
                  top: '-3px',
                  left: '50%',
                  marginLeft: '-3px',
                  borderLeft: '3px solid transparent',
                  borderRight: '3px solid transparent',
                  borderBottom: resolvedTheme === 'dark' ? '3px solid #0d1117' : '3px solid white',
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
