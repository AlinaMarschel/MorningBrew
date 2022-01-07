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

        this.model.scale.set(1.25, 1.25, 1.25)
        this.model.rotation.y = 3.6
        this.model.position.x = 3.2
        this.model.position.y = -6

        let globeWater = this.model.children.find((child) => child.name === 'water')
        let globeEarth = this.model.children.find((child) => child.name === 'earth')
        
        globeWater.material = this.matcapWaterMaterial
        globeEarth.material = this.matcapEarthMaterial

        this.scene.add(this.model)
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

}