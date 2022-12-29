import * as THREE from 'three'
import vertexSource from '../shader/vertex.glsl'
import fragmentSource from '../shader/fragment.glsl'

export class CreateThreeScene {
  app: HTMLDivElement
  axes: THREE.AxesHelper
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  light: THREE.DirectionalLight
  renderer: THREE.WebGLRenderer
  geometry: THREE.BoxGeometry
  material: THREE.ShaderMaterial
  box: THREE.Mesh
  width: number
  height: number

  constructor() {
    console.log('THREE')

    this.width = window.innerWidth
    this.height = window.innerHeight

    // 描画先の要素
    this.app = document.querySelector('#app')!

    // // シーンを初期化
    this.scene = new THREE.Scene()

    // ヘルパー
    this.axes = new THREE.AxesHelper()
    this.scene.add(this.axes)

    // カメラを初期化
    this.camera = new THREE.PerspectiveCamera(
      45,
      this.width / this.height,
      1,
      10000
    )
    this.camera.position.set(1, 1, 500)
    this.camera.lookAt(this.scene.position)

    // 平行光源を生成
    this.light = new THREE.DirectionalLight(0xffffff)
    this.light.position.set(1, 1, 1)
    this.scene.add(this.light)

    // 箱を作成
    this.geometry = new THREE.BoxGeometry(100, 100, 100)
    this.material = new THREE.ShaderMaterial({
      vertexShader: vertexSource,
      fragmentShader: fragmentSource,
    })
    this.box = new THREE.Mesh(this.geometry, this.material)
    this.scene.add(this.box)

    // レンダラーの初期化
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(this.app.offsetWidth, this.app.offsetHeight)

    // // レンダラーをDOMに追加
    this.app.appendChild(this.renderer.domElement)

    // 描画ループを開始
    const tick = (): void => {
      requestAnimationFrame(tick)

      this.box.rotation.x += 0.005
      this.box.rotation.y += 0.005

      // 描画
      this.renderer.render(this.scene, this.camera)
    }
    tick()
  }
}
