import * as THREE from 'three'
import Experience from "../Experience";
import gsap from 'gsap'


export default class Globe
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // Setup

        this.resource = this.resources.items.globeModel

        this.setTexture()
        this.setMaterial()
        this.setModel()
        this.setScroll()
        this.onClick()
    }

    setTexture()
    {
        this.textures = {}
        this.textures.matcapWater = this.resources.items.matCapWaterTexture
        this.textures.matcapEarth = this.resources.items.matCapEarthTexture

    }

    setMaterial()
    {

        this.matcapWaterMaterial = new THREE.MeshMatcapMaterial()
        this.matcapWaterMaterial.matcap = this.textures.matcapWater

        this.matcapEarthMaterial = new THREE.MeshMatcapMaterial()
        this.matcapEarthMaterial.matcap = this.textures.matcapEarth
    }

    setModel()
    {
        this.model = this.resource.scene

        this.model.scale.set(2, 2, 2)
        this.model.rotation.y = 0
        this.model.position.x = 0
        this.model.position.y = -1.8

        let globeWater = this.model.children.find((child) => child.name === 'water')
        let globeEarth = this.model.children.find((child) => child.name === 'earth')
        
        globeWater.material = this.matcapWaterMaterial
        globeEarth.material = this.matcapEarthMaterial

        this.scene.add(this.model)
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

    onClick()
    {
        const button = document.querySelector('a.btn-action')

        button.addEventListener('click', () => {
            gsap.to(
                this.model.rotation, {
                duration: 1.2,
                ease: 'power2.inOut',
                y: '-= 10.5deg'
                }
            )

        })
    }

    update()
    {
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

}