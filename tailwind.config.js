export default {
  content: ['./app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-pretendard)'],
      },
    },
  },
  extend: {
    colors: {
      bg: 'var(--color-bg)',
      fg: 'var(--color-fg)',

      primary: 'var(--color-primary)',
      'primary-fg': 'var(--color-primary-fg)',

      muted: 'var(--color-muted)',
      'muted-fg': 'var(--color-muted-fg)',

      border: 'var(--color-border)',
      danger: 'var(--color-danger)',
    },
  },
};
