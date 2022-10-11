import * as THREE from 'three'
import Experience from "./Experience";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Globe from './World/Globe';

export default class Camera 
{
    constructor()
    {
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas
        this.delta = this.experience.time.delta

        this.setInstance()
        this.setOrbitControls()
        this.resize()
        this.setCursor()
        this.setScroll()
        this.update()
    }

    setCursor() {
        this.cursor = {}
        this.cursor.x = 0
        this.cursor.y = 0

        window.addEventListener('mousemove', (event) => {
            this.cursor.x = event.clientX / this.sizes.width - 0.5
            this.cursor.y = event.clientY / this.sizes.height - 0.5
        })
    }

    setScroll()
    {
        this.scrollY = window.scrollY
        this.currentSection = 0

        window.addEventListener('scroll', () => {
            this.scrollY = window.scrollY
            this.newSection = Math.round(this.scrollY / this.sizes.height)
        })
    }

    setInstance()
    {
        // Group
        this.cameraGroup = new THREE.Group()
        this.scene.add(this.cameraGroup)

        // Base Camera
        this.instance = new THREE.PerspectiveCamera(35, this.sizes.width / this.sizes.height, 0.1, 100)
        this.instance.position.x = 0
        this.instance.position.y = 0
        this.instance.position.z = 5
        this.cameraGroup.add(this.instance)
    }

    setOrbitControls()
    {
        this.controls = new OrbitControls(this.instance, this.canvas)
        this.controls.enableDamping = true

        this.controls.autoRotate = true 
        this.controls.autoRotateSpeed = 0.5

        this.controls.enableZoom = true
        this.controls.enablePan = true
    }

    resize()
    {
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }


    animateCamera()
    {

        if (this.currentSection = 0) {
            this.controls.enableZoom = false
            this.controls.enablePan = false
        }

        if (this.currentSection != 0) {
        this.instance.position.y = -this.scrollY / this.sizes.height * 4

        let parallaxX = this.cursor.x * 0.3
        let parallaxY = -this.cursor.y * 0.3

        this.cameraGroup.position.x += (parallaxX - this.cameraGroup.position.x) * 0.01 * this.delta
        this.cameraGroup.position.y += (parallaxY - this.cameraGroup.position.y) * 0.01 * this.delta
        }
        
    }

    update()
    {
        //this.controls.update()
        this.animateCamera()
    }
}