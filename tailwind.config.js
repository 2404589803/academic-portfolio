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
          'bg': '#1e1e1e',         // VS Code Dark+ Background
          'fg': '#d4d4d4',         // Default Foreground
          'sidebar': '#252526',    // Sidebar Background
          'active': '#37373d',     // Active Line/Selection
          'line': '#2d2d2d',       // Line Number/Border
          'comment': '#6a9955',    // Comment Green
          'keyword': '#569cd6',    // Keyword Blue
          'string': '#ce9178',     // String Orange
          'function': '#dcdcaa',   // Function Yellow
          'number': '#b5cea8',     // Number Light Green
          'type': '#4ec9b0',       // Type Teal
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

