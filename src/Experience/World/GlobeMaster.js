import * as THREE from 'three'
import Experience from "../Experience";
import gsap from 'gsap'


export default class GlobeMaster
{
    constructor()
    {
        this.experience = new Experience()
        this.resources = this.experience.resources

        // Setup

        this.resource = this.resources.items.globeModel

        this.setTexture()
        this.setMaterial()
        this.setModel()
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

    setModel(positionX, positionY)
    {
        this.model = this.resource.scene

        this.positionX = positionX
        this.positionY = positionY

        this.model.scale.set(1.25, 1.25, 1.25)
        this.model.rotation.y = 3.6
        this.model.position.x = positionX
        this.model.position.y = positionY

        let globeWater = this.model.children.find((child) => child.name === 'water')
        let globeEarth = this.model.children.find((child) => child.name === 'earth')
        
        globeWater.material = this.matcapWaterMaterial
        globeEarth.material = this.matcapEarthMaterial
    }

}