module.exports = {
  purge: {
    content: ['./src/**/*.html'],
    options: {
      whitelistPatterns: [/^bg-/, /^text-/]
    }
  },
  theme: {
    extend: {
      fontFamily: {
        'ops': ['Black Ops One', 'cursive']
      }
    },
  },
  variants: {},
  plugins: [],
}
