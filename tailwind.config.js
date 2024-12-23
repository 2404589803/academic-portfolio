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
        'academic': {
          'primary': '#2C3E50',    // 深蓝色，适合标题
          'secondary': '#34495E',   // 次要深蓝色
          'accent': '#3498DB',      // 强调蓝色
          'light': '#ECF0F1',      // 浅灰色背景
          'paper': '#FFFFFF',       // 纸张白色
        }
      },
      fontFamily: {
        'serif': ['Merriweather', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['Fira Code', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#2C3E50',
            lineHeight: '1.75',
          }
        }
      }
    },
  },
  plugins: [
    typography,
    function({ addUtilities }) {
      addUtilities({
        '.glass-effect': {
          'background': 'rgba(255, 255, 255, 0.1)',
          'backdrop-filter': 'blur(10px)',
          '-webkit-backdrop-filter': 'blur(10px)'
        },
        '.academic-card': {
          'background': '#FFFFFF',
          'border': '1px solid #E2E8F0',
          'border-radius': '0.5rem',
          'box-shadow': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          'padding': '1.5rem',
          'transition': 'all 0.3s ease'
        },
        '.academic-title': {
          'font-family': 'Merriweather, Georgia, serif',
          'font-weight': '700',
          'color': '#2C3E50',
          'line-height': '1.2'
        }
      })
    }
  ],
}

