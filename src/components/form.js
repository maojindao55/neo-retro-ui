// src/components/form.js
module.exports = (theme) => ({
    '.input': {
      display: 'block',
      width: '100%',
      padding: `${theme('spacing.2')} ${theme('spacing.3')}`,
      borderWidth: '1.5px',
      borderColor: theme('colors.secondary'),
      borderRadius: theme('borderRadius.md'),
      boxShadow: theme('boxShadow.neoretro'),
      '&:focus': {
        outline: 'none',
        boxShadow: `${theme('boxShadow.neoretro')}, 0 0 0 3px rgba(247, 223, 30, 0.5)`,
      },
    },
    '.select': {
      display: 'block',
      width: '100%',
      padding: `${theme('spacing.2')} ${theme('spacing.3')}`,
      borderWidth: '1.5px',
      borderColor: theme('colors.secondary'),
      borderRadius: theme('borderRadius.md'),
      boxShadow: theme('boxShadow.neoretro'),
      appearance: 'none',
      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
      backgroundPosition: `right ${theme('spacing.2')} center`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '1.5em 1.5em',
      '&:focus': {
        outline: 'none',
        boxShadow: `${theme('boxShadow.neoretro')}, 0 0 0 3px rgba(247, 223, 30, 0.5)`,
      },
    },
    '.checkbox': {
      appearance: 'none',
      width: theme('spacing.4'),
      height: theme('spacing.4'),
      borderWidth: '1.5px',
      borderColor: theme('colors.secondary'),
      borderRadius: theme('borderRadius.sm'),
      boxShadow: theme('boxShadow.neoretro'),
      '&:checked': {
        backgroundColor: theme('colors.primary'),
        borderColor: theme('colors.primary'),
        backgroundImage: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")`,
      },
      '&:focus': {
        outline: 'none',
        boxShadow: `${theme('boxShadow.neoretro')}, 0 0 0 3px rgba(247, 223, 30, 0.5)`,
      },
    },
  })