import { CreateThreeScene } from './module/CreateThreeScene'
// import { debounce, throttle } from 'throttle-debounce'

const onDOMContentLoaded = () => {
  new CreateThreeScene()
}
// const onLoad = () => {}
// const onScroll = () => {}
// const onResize = () => {}

// addEventListeners
window.addEventListener('DOMContentLoaded', onDOMContentLoaded)
// window.addEventListener('load', onLoad)
// window.addEventListener('scroll', throttle(100, onScroll), false)
// window.addEventListener('resize', debounce(100, onResize), false)
