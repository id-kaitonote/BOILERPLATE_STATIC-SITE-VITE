export default {
  HTML: document.documentElement,
  BODY: document.body,
  HEADER: document.getElementsByTagName('header')[0],
  MAIN: document.getElementsByTagName('main')[0],
  FOOTER: document.getElementsByTagName('footer')[0],
  NAV: document.querySelectorAll('[ data-menu-content]'),
  HMB: document.querySelector('[data-menu]'),
  ANIMATIONS: document.querySelectorAll('[data-animate]'),
}
