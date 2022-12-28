import gsap from 'gsap'

type typeOptions = {
  root: null | HTMLElement
  rootMargin: string
  threshold: number[]
}

class AddClassInWindow {
  targets: NodeListOf<HTMLElement>
  options: typeOptions
  observer: IntersectionObserver

  constructor() {
    this.options = {
      root: null,
      rootMargin: '0px',
      threshold: [0.25, 0.5],
    }

    this.targets = document.querySelectorAll('[data-animate]')
    this.observer = new IntersectionObserver(this.animate, this.options)

    this.init()
  }

  // 初期化
  init(): void {
    this.targets.forEach((target) => {
      gsap.set(target, {
        opacity: 0,
      })
      this.observer.observe(target as HTMLElement)
    })
  }

  // // 交差時アニメーション
  animate(entries: IntersectionObserverEntry[]): void {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        gsap.fromTo(
          entry.target,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 1,
            delay: 0.2,
            ease: 'Power2.easeOut',
            visibility: 'visible',
          }
        )
        this.observer.unobserve(entry.target)
      }
    })
  }
}
export default AddClassInWindow
