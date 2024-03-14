import * as THREE from "three"
import Experience from "./Experience.js"

export default class Renderer {
    constructor() {
        this.experience = new Experience()
        this.canvas = this.experience.canvas
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.camera = this.experience.camera

        this.setInstance()
    }

    setInstance() {
        this.instance = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
            physicallyCorrectLights: true,
            shadowMap: {
                enabled: true,
                type: THREE.PCFSoftShadowMap
            },
            toneMapping: THREE.CineonToneMapping
        })

        this.instance.setSize(this.sizes.width, this.sizes.height)
        this.instance.setPixelRatio(this.sizes.devicePixelRatio)
        this.instance.setClearColor('#211d20')
    }

    resize() {
        this.instance.setSize(this.sizes.width, this.sizes.height)
        this.instance.setPixelRatio(this.sizes.devicePixelRatio)
    }

    update() {
        this.instance.render(this.scene, this.camera.instance)
    }
}