import * as THREE from 'three'
import Experience from "../Experience";

export default class Coffeebeans 
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.delta = this.experience.time.delta

        // Setup

        this.beanArray = []

        this.resource = this.resources.items.coffeeBeansModel

        this.setTexture()
        this.setMaterial()
        this.setModel()
        this.update()

    }


    setTexture()
    {
        this.textures = {}
        this.textures.color = this.resources.items.matCapBeanTexture
    }
    setMaterial()
    {
        this.material = new THREE.MeshMatcapMaterial()
        this.material.matcap = this.textures.color
    }

    setModel()
    {
        this.model = this.resource.scene

        this.model.scale.set(0.5, 0.5, 0.5)
        this.model.position.x = 0.5
        this.model.position.y = -1.3
        this.model.position.z = -1.5
        this.model.rotation.y = -Math.PI / 2;

        this.model.traverse((children) => {
            children.material = this.material

            if(children.name.includes('bean')) {
                this.beanArray.push(children)
            }
        })

        this.scene.add(this.model)
    }

    update()
    {
        for(let item of this.beanArray) {
            item.rotation.x += this.delta * 0.0002
            item.rotation.y += this.delta * 0.00023
            item.rotation.z += this.delta * 0.00036
        }
    }

}