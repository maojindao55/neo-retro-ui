// src/components/card.js
module.exports = (theme) => ({
    '.card': {
      padding: theme('spacing.4'),
      borderWidth: '1.5px',
      borderColor: theme('colors.secondary'),
      borderRadius: theme('borderRadius.md'),
      boxShadow: theme('boxShadow.neoretro'),
    },
  })