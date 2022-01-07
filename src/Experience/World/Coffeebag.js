import * as THREE from 'three'
import Experience from "../Experience";


export default class Coffeebag 
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // Setup
        this.resource = this.resources.items.coffeeBagModel

        this.setTexture()
        this.setMaterial()
        this.setModel()
    }    

    setTexture()
    {
        this.textures = {}

        this.textures.color = this.resources.items.bakedTexture
        this.textures.color.encoding = THREE.sRGBEncoding
        this.textures.color.flipY = false
        this.textures.anisotropy = 32

    }

    setMaterial()
    {
        this.material =  new THREE.MeshBasicMaterial({
                map: this.textures.color
        })
    }

    
    setModel()
    {
        this.viewportHeight = this.experience.sizes.height

        this.model = this.resource.scene
        this.model.scale.set(0.4, 0.4, 0.4)
        this.model.position.x = 3
        this.model.position.y = -this.viewportHeight * 0.01
        this.model.position.z = -3
        this.model.rotation.y = 0.18;

        this.model.traverse((child) => {
            child.material = this.material
        })

        this.scene.add(this.model)
    }
}