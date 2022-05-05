import * as THREE from 'three'
import Experience from "../Experience";


export default class Jungle {

    constructor() {

        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        //setTexture()
        this.setSprite()

    }

    setSprite() {
        
        this.backgroundMaterial = new THREE.SpriteMaterial({ map: this.resources.items.jungleBackground });
        this.backgroundSprite = new THREE.Sprite(this.backgroundMaterial);

        this.plant01Material = new THREE.SpriteMaterial({map: this.resources.items.plant01})
        this.plant01 = new THREE.Sprite(this.plant01Material)

        this.backgroundSprite.scale.set(20, 10 ,0)
        this.backgroundSprite.position.set(0, 0, -10)

        this.plant01.scale.set(1, 1, 1)
        this.plant01.position.set(-1.5, -0.5, 2)

        console.log(this.plant01)

        this.scene.add(this.backgroundSprite, this.plant01);
    }

}