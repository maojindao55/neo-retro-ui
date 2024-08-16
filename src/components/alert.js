// src/components/alert.js
module.exports = (theme) => ({
  '.alert': {
    padding: theme('spacing.4'),
    borderWidth: '1.5px',
    borderStyle: 'solid',
    borderRadius: theme('borderRadius.md'),
    marginBottom: theme('spacing.4'),
    boxShadow: `4px 5px 0 0 ${theme('colors.shadow')}`,
  },
  '.alert-success': {
    backgroundColor: 'rgba(72, 187, 120, 0.2)',
    borderColor: theme('colors.success'),
    color: theme('colors.success'),
  },
  '.alert-warning': {
    backgroundColor: 'rgba(247, 174, 71, 0.2)',
    borderColor: theme('colors.warning'),
    color: theme('colors.warning'),
  },
  '.alert-danger': {
    backgroundColor: 'rgba(229, 62, 62, 0.2)',
    borderColor: theme('colors.danger'),
    color: theme('colors.danger'),
  },
})