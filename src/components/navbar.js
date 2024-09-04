// src/components/navbar.js
module.exports = (theme) => ({
  '.navbar': {
    display: 'flex',
    alignItems: 'center',
    padding: `${theme('spacing.3')} ${theme('spacing.5')}`,
    backgroundColor: theme('colors.primary'),
    border: `2px solid ${theme('colors.secondary')}`,
    borderRadius: theme('borderRadius.lg'),
    boxShadow: theme('boxShadow.neoretro')
  },
  '.navbar-brand': {
    fontSize: theme('fontSize.xl'),
    fontWeight: 'bold',
    color: theme('colors.primary-dark'),
    marginRight: theme('spacing.4'), // 在品牌和菜单之间添加一些间距
  },
  '.navbar-menu': {
    display: 'flex',
    gap: theme('spacing.4'),
    // 不需要额外的样式，它会自然地跟随在 brand 之后
  },
  '.navbar-end': {
    marginLeft: 'auto', // 将菜单项推到右边
  },
  '.navbar-item': {
    padding: `${theme('spacing.2')} ${theme('spacing.3')}`,
    color: theme('colors.primary-dark'),
    borderRadius: theme('borderRadius.md'),
    fontWeight: '600',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: theme('colors.secondary'),
      color: theme('colors.primary'),
    },
  },
  '.navbar-button': {
    padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
    backgroundColor: theme('colors.accent'),
    color: 'white',
    borderRadius: theme('borderRadius.md'),
    boxShadow: theme('boxShadow.neoretro'),
    transition: 'transform 0.1s ease',
    '&:hover': {
      transform: 'translate(-1px, -1px)',
      boxShadow: `4px 5px 0 0 ${theme('colors.shadow')}`,
    },
    '&:active': {
      transform: 'translate(1px, 1px)',
      boxShadow: `2px 3px 0 0 ${theme('colors.shadow')}`,
    },
  },
})