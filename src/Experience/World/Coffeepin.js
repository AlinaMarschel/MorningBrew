import * as THREE from 'three'
import Experience from '../Experience.js'
import Globe from './Globe.js'

export default class Coffeepin
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.globeMaster = new Globe()
        this.globe = this.globeMaster.model

        this.radius = 0.5

        this.brasilCord = {
            lat: -12.717171,
            lon: -43.867233
        }

        this.brasilSpherical = {
            lat: THREE.Math.degToRad(90 - this.brasilCord.lat),
            lon: THREE.Math.degToRad(this.brasilCord.lon),
        }

        this.brasilVector = new THREE.Vector3().setFromSphericalCoords(
            this.radius + 0.05,
            this.brasilSpherical.lat,
            this.brasilSpherical.lon
        );

        // Setup

        this.resource = this.resources.items.pinModel

        this.setTexture()
        this.setMaterial()
        this.setModel()
    }


    setTexture()
    {
        this.textures = {}

        this.textures.color = this.resources.items.bakedPinTexture
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

        this.model = this.resource.scene
        this.model.scale.set(0.08, 0.08, 0.08)
        this.model.rotation.y = 1.2
        this.model.rotation.z = 1.5
        this.model.position.set(this.brasilVector.x, this.brasilVector.y, this.brasilVector.z + this.radius)

        
        this.model.traverse((child) => {
            child.material = this.material
        })

        console.log(this.model)

        this.globe.add(this.model)
    }

}