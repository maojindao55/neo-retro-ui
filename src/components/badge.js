// src/components/badge.js
module.exports = (theme) => ({
  '.badge': {
    display: 'inline-block',
    padding: '0.25rem 0.5rem',
    fontSize: '0.75rem',
    fontWeight: '700',
    lineHeight: '1',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'baseline',
    borderRadius: '0.25rem',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: theme('colors.secondary'),
    backgroundColor: theme('colors.background'),
    boxShadow: `2px 2px 0 0 ${theme('colors.shadow')}`,
  },
  '.badge-primary': {
    backgroundColor: theme('colors.primary'),
    color: theme('colors.primary-dark'),
  },
  '.badge-secondary': {
    backgroundColor: theme('colors.secondary'),
    color: theme('colors.white'),
  },
})