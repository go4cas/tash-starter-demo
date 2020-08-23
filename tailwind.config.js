module.exports = {
  purge: {
    content: ['./src/**/*.html'],
    options: {
      whitelistPatterns: [/^text-/]
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
