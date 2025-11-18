import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'editor': {
          'bg': 'var(--editor-bg)',
          'fg': 'var(--editor-fg)',
          'sidebar': 'var(--editor-sidebar)',
          'active': 'var(--editor-active)',
          'line': 'var(--editor-line)',
          'comment': 'var(--editor-comment)',
          'keyword': 'var(--editor-keyword)',
          'string': 'var(--editor-string)',
          'function': 'var(--editor-function)',
          'number': 'var(--editor-number)',
          'type': 'var(--editor-type)',
        }
      },
      fontFamily: {
        'mono': ['"JetBrains Mono"', '"Fira Code"', 'Consolas', 'Monaco', 'monospace'],
        'sans': ['"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'cursor-blink': 'cursorBlink 1s step-end infinite',
      },
      keyframes: {
        cursorBlink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      }
    },
  },
  plugins: [
    typography,
    function ({ addUtilities }) {
      addUtilities({
        '.code-line': {
          'font-family': '"JetBrains Mono", "Fira Code", monospace',
          'line-height': '1.6',
        },
        '.line-number': {
          'color': '#858585',
          'text-align': 'right',
          'padding-right': '1.5rem',
          'user-select': 'none',
        }
      })
    }
  ],
}

