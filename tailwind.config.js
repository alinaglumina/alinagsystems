/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand — "Obsidian & Cobalt"
        cobalt: { DEFAULT: '#2E6BFF', 600: '#1F58F0', 700: '#1848CC' },
        iris:   { DEFAULT: '#7B61FF' },
        aqua:   { DEFAULT: '#35E0D8' },
        obsidian: '#0A0C12',
        // Semantic tokens (flip via CSS variables in globals.css)
        canvas:  'rgb(var(--canvas) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        raised:  'rgb(var(--raised) / <alpha-value>)',
        line:    'rgb(var(--line) / <alpha-value>)',
        ink:     'rgb(var(--ink) / <alpha-value>)',
        muted:   'rgb(var(--muted) / <alpha-value>)',
        faint:   'rgb(var(--faint) / <alpha-value>)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans:    ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
      },
      letterSpacing: { tightest: '-0.04em' },
      maxWidth: { container: '1200px' },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(120deg, #2E6BFF 0%, #7B61FF 55%, #35E0D8 120%)',
        'grid-fade': 'radial-gradient(ellipse at top, rgba(46,107,255,0.10), transparent 60%)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(46,107,255,0.14), 0 20px 60px -20px rgba(46,107,255,0.35)',
        card: '0 1px 2px rgba(10,12,18,0.04), 0 12px 32px -16px rgba(10,12,18,0.16)',
      },
      keyframes: {
        'fade-up': { '0%': { opacity: '0', transform: 'translateY(12px)' }, '100%': { opacity: '1', transform: 'none' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
        'pulse-node': { '0%,100%': { opacity: '0.35', r: '2.5' }, '50%': { opacity: '1', r: '4' } },
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both',
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 32s linear infinite',
      },
    },
  },
  plugins: [],
};
