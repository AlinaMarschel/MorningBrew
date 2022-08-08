import * as THREE from 'three'
import Experience from "../Experience";
import { gsap, Power4 } from 'gsap'

export default class Globe {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // Setup
        this.resource = this.resources.items.globeModel

        this.setTexture()
        this.setMaterial()
        this.setModel()
        // this.setScroll()
        // this.onGrab()

        this.targetRotationX = 0.5
        this.targetRotationOnMouseDownX = 0

        this.targetRotationY = 0.2
        this.targetRotationOnMouseDownY = 0

        this.mouseX = 0
        this.mouseXOnMouseDown = 0

        this.mouseY = 0
        this.mouseYOnMouseDown = 0

        this.windowHalfX = window.innerWidth / 2
        this.windowHalfY = window.innerHeight / 2

        this.slowingFactor = 0.005

    }

    setModel() {
        this.model = this.resource.scene

        this.model.scale.set(2, 2, 2)

        this.model.position.y = -1.8

        let globeWater = this.model.children.find((child) => child.name === 'water')
        let globeEarth = this.model.children.find((child) => child.name === 'earth')

        globeWater.material = this.matcapWaterMaterial
        globeEarth.material = this.matcapEarthMaterial

        this.scene.add(this.model)

        document.addEventListener('mousedown', this.onDocumentMouseDown, false)
    }

    setTexture() {
        this.textures = {}
        this.textures.matcapWater = this.resources.items.matCapWaterTexture
        this.textures.matcapEarth = this.resources.items.matCapEarthTexture
    }

    setMaterial() {

        this.matcapWaterMaterial = new THREE.MeshMatcapMaterial()
        this.matcapWaterMaterial.matcap = this.textures.matcapWater

        this.matcapEarthMaterial = new THREE.MeshMatcapMaterial()
        this.matcapEarthMaterial.matcap = this.textures.matcapEarth
    }

    onDocumentMouseDown(event) {
        event.preventDefault()

        document.addEventListener('mousemove', this.onDocumentMouseMove, false)
        document.addEventListener('mouseup', this.onDocumentMouseUp, false)
        document.addEventListener('mouseout', this.onDocumentMouseOut, false)

        this.mouseXOnMouseDown = event.clientX - this.windowHalfX
        this.targetRotationOnMouseDownX = this.targetRotationX

        this.mouseYOnMouseDown = event.clientY - this.windowHalfY
        this.targetRotationOnMouseDownY = this.targetRotationY

        console.log('onDocumentDown')
    }

    onDocumentMouseMove(event) {

        this.mouseX = event.clientX - this.windowHalfX
        this.targetRotationX = (this.mouseX - this.mouseXOnMouseDown) * 0.00025

        this.mouseY = event.clientY - this.windowHalfY
        this.targetRotationY = (this.mouseY - this.mouseYOnMouseDown) * 0.00025

    }

    onDocumentMouseUp(event) {
        document.removeEventListener('mousemove', this.onDocumentMouseMove, false)
        document.removeEventListener('mouseup', this.onDocumentMouseUp, false)
        document.removeEventListener('mouseout', this.onDocumentMouseOut, false)
    }

    onDocumentMouseOut(event) {
        document.removeEventListener('mousemove', this.onDocumentMouseMove, false)
        document.removeEventListener('mouseup', this.onDocumentMouseUp, false)
        document.removeEventListener('mouseout', this.onDocumentMouseOut, false)
    }



    // onGrab() {
    //     document.addEventListener('mousedown', (event) => {
    //         this.startX = event.clientX
    //         this.startY = event.clientY
    //     })

    //     document.addEventListener('mouseup', () => {
    //         const distanceX = (this.startX - event.clientX) * 0.001
    //         const distanceY = (this.startY - event.clientY) * 0.001

    //         gsap.to(this.model.rotation, {
    //             y: this.model.rotation.x - distanceX,
    //             x: this.model.rotation.y - distanceY,
    //             duration: 2,
    //             ease: Power4.easeOut
    //         })
    //     })
    // }


    // setScroll() {
    //     this.scrollY = window.scrollY
    //     this.currentSection = 0

    //     window.addEventListener('scroll', () => {
    //         this.scrollY = window.scrollY
    //         this.newSection = Math.round(this.scrollY / this.sizes.height)
    //     })
    // }

    // onClick()
    // {
    //     const button = document.querySelector('a.btn-action')

    //     button.addEventListener('click', () => {
    //         gsap.to(
    //             this.model.rotation, {
    //             duration: 1.2,
    //             ease: 'power2.inOut',
    //             y: '-= 10.5deg'
    //             }
    //         )

    //     })
    // }

    update() {
        this.animate()

        // if(this.currentSection == 0) {
        //     gsap.to(
        //         this.model.rotation, {
        //             ease: 'power2.inOut',
        //             y: '-= .35deg'
        //         }
        //     )
        //     console.log('Hi!')
        // }
    }


    animate() {
        this.rotateAroundWorldAxis(this.model, new THREE.Vector3(0, 1, 0), this.targetRotationX);
        this.rotateAroundWorldAxis(this.model, new THREE.Vector3(1, 0, 0), this.targetRotationY);

        this.targetRotationY = this.targetRotationY * (1 - this.slowingFactor);
        this.targetRotationX = this.targetRotationX * (1 - this.slowingFactor);
    }



    rotateAroundObjectAxis(object, axis, radians) {
        this.rotationMatrix = new THREE.Matrix4()

        this.rotationMatrix.makeRotationAxis(axis.normalize(), radians)
        object.matrix.multiply(this.rotationMatrix)
        object.rotation.setFromRotationMatrix(object.matrix)
    }

    rotateAroundWorldAxis(object, axis, radians) {

        this.rotationMatrix = new THREE.Matrix4()

        this.rotationMatrix.makeRotationAxis(axis.normalize(), radians)
        this.rotationMatrix.multiply(object.matrix)
        object.matrix = this.rotationMatrix
        object.rotation.setFromRotationMatrix(object.matrix)

    }

}