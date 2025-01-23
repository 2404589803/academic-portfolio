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
          'primary': '#000000',    // 黑色文字
          'secondary': '#86868b',   // 苹果风格的次要灰色
          'accent': '#0066CC',      // 苹果风格的蓝色
          'light': '#ffffff',      // 白色背景
          'paper': '#f5f5f7',      // 苹果风格的浅灰色背景
        }
      },
      fontFamily: {
        'serif': ['-apple-system', 'SF Pro Display', 'system-ui', 'sans-serif'],
        'sans': ['-apple-system', 'SF Pro Text', 'system-ui', 'sans-serif'],
        'mono': ['SF Mono', 'monospace'],
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
          'background': 'rgba(255, 255, 255, 0.8)',
          'backdrop-filter': 'blur(20px)',
          '-webkit-backdrop-filter': 'blur(20px)',
          'border': '1px solid rgba(255, 255, 255, 0.3)'
        },
        '.academic-card': {
          'background': '#ffffff',
          'border': '1px solid #e5e5e5',
          'border-radius': '1rem',
          'box-shadow': '0 2px 8px rgba(0, 0, 0, 0.05)',
          'padding': '1.5rem',
          'transition': 'all 0.3s ease'
        },
        '.academic-title': {
          'font-family': '-apple-system, SF Pro Display, system-ui, sans-serif',
          'font-weight': '600',
          'color': '#000000',
          'line-height': '1.2'
        }
      })
    }
  ],
}

