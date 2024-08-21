// src/components/tabs.js
module.exports = (theme) => ({
  '.tabs': {
    display: 'flex',
    flexWrap: 'wrap',
    borderBottom: `2px solid ${theme('colors.secondary')}`,
  },
  '.tab': {
    padding: '10px 20px',
    cursor: 'pointer',
    backgroundColor: 'var(--background)',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: theme('colors.secondary'),
    borderBottom: 'none',
    marginRight: theme('spacing.1'),
    borderRadius: `0.5rem 0.5rem 0 0`,
    boxShadow: `3px 0 0 0 ${theme('colors.shadow')}`,
    '&.active': {
      backgroundColor: theme('colors.primary'),
      borderBottomWidth: '2px',
      borderBottomStyle: 'solid',
      borderBottomColor: theme('colors.primary'),
      marginBottom: '-2px',
    },
  },
  '.tab-content': {
    display: 'none',
    padding: '20px',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: theme('colors.secondary'),
    borderTop: 'none',
    borderRadius: `0 0 0.5rem 0.5rem`,
    boxShadow: `5px 5px 0 0 ${theme('colors.shadow')}`,
    '&.active': {
      display: 'block',
    },
  },
})
