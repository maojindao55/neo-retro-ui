// src/components/button.js
module.exports = (theme) => ({
    '.btn': {
      padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
      borderWidth: '1.5px',
      borderColor: theme('colors.secondary'),
      backgroundColor: theme('colors.primary'),
      fontWeight: theme('fontWeight.bold'),
      color: theme('colors.primary-dark'),
      boxShadow: theme('boxShadow.neoretro'),
      borderRadius: theme('borderRadius.md'),
      display: 'inline-flex',
      alignItems: 'center',
      gap: theme('spacing.2'),
      cursor: 'pointer',
      userSelect: 'none',
      whiteSpace: 'nowrap',
      transition: 'all 75ms cubic-bezier(.4,0,.2,1)',
      '&:hover': {
        backgroundColor: 'rgba(247, 223, 30, 0.9)',
        transform: 'translate(1px, 1px)',
      },
      '&:focus': {
        outline: 'none',
        boxShadow: `${theme('boxShadow.neoretro')}, 0 0 0 3px rgba(247, 223, 30, 0.5)`,
      },
    },
  
    // Add size variants
    '.btn-sm': {
      padding: `${theme('spacing.1')} ${theme('spacing.2')}`,
      fontSize: theme('fontSize.sm'),
    },
  
    '.btn-lg': {
      padding: `${theme('spacing.3')} ${theme('spacing.6')}`,
      fontSize: theme('fontSize.lg'),
    },

    '.btn-secondary': {
      backgroundColor: theme('colors.secondary'),
      color: theme('colors.white'),
      '&:hover': {
        backgroundColor: theme('colors.primary'),
        color: theme('colors.black'),
      },
    },
    '.btn-outline': {
      backgroundColor: 'transparent',
      color: theme('colors.secondary'),
      '&:hover': {
        backgroundColor: theme('colors.secondary'),
        color: theme('colors.white'),
      },
    },
  })