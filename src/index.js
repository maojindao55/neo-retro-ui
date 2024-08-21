// src/index.js
const plugin = require('tailwindcss/plugin')
const colors = require('./styles/colors')
const spacing = require('./styles/spacing')
const button = require('./components/button')
const card = require('./components/card')
const form = require('./components/form')
const badge = require('./components/badge')
const alert = require('./components/alert')
const tabs = require('./components/tabs')
const navbar = require('./components/navbar')

module.exports = plugin(function({ addComponents, theme }) {
  addComponents({
    ...button(theme),
    ...card(theme),
    ...form(theme),
    ...badge(theme),
    ...alert(theme),
    ...tabs(theme),
    ...navbar(theme),
  })
}, {
  theme: {
    extend: {
      colors: colors,
      spacing: spacing,
      boxShadow: {
        'neoretro': '3px 4px 0 0 rgba(100, 116, 139, 0.333)',
      },
    },
  },
})