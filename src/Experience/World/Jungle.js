import * as THREE from 'three'
import { Color, sRGBEncoding } from 'three';
import Experience from "../Experience";


export default class Jungle {

    constructor() {

        this.experience = new Experience()
        this.debug = this.experience.debug
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        //setTexture()
        this.setSprite()
        //this.debugJungle()

    }

    setSprite() {
        // Background Color
        this.backgroundTexture = this.resources.items.jungleBackground
        this.backgroundTexture.encoding = THREE.sRGBEncoding
        this.backgroundMaterial = new THREE.SpriteMaterial({
            map: this.backgroundTexture
        });
        this.backgroundSprite = new THREE.Sprite(this.backgroundMaterial);


        // Background Hill 01
        this.backgroundHillTexture = this.resources.items.jungleHillBackground
        this.backgroundHillTexture.encoding = THREE.sRGBEncoding
        this.backgroundHillMaterial = new THREE.SpriteMaterial({
            map: this.backgroundHillTexture
        });
        this.backgroundHillSprite = new THREE.Sprite(this.backgroundHillMaterial);

        // Background Hill 02
        this.backgroundHillTexture02 = this.resources.items.jungleHillBackground02
        this.backgroundHillTexture02.encoding = THREE.sRGBEncoding
        this.backgroundHillMaterial02 = new THREE.SpriteMaterial({
            map: this.backgroundHillTexture02
        });
        this.backgroundHillSprite02 = new THREE.Sprite(this.backgroundHillMaterial02);


        // Background Tree 01
        this.backgroundTreeTexture01 = this.resources.items.bgtree01
        this.backgroundTreeTexture01.encoding = THREE.sRGBEncoding
        this.backgroundTreeMaterial01 = new THREE.SpriteMaterial({
            map: this.backgroundTreeTexture01
        });
        this.backgroundTree01 = new THREE.Sprite(this.backgroundTreeMaterial01);

        // Background Tree 02
        this.backgroundTreeTexture02 = this.resources.items.bgtree02
        this.backgroundTreeTexture02.encoding = THREE.sRGBEncoding
        this.backgroundTreeMaterial02 = new THREE.SpriteMaterial({
            map: this.backgroundTreeTexture02
        });
        this.backgroundTree02 = new THREE.Sprite(this.backgroundTreeMaterial02);


        // Plant 01
        this.plant01Texture = this.resources.items.plant01
        this.plant01Texture.encoding = THREE.sRGBEncoding
        this.plant01Material = new THREE.SpriteMaterial({
            map: this.plant01Texture,
            rotation: 0.55
        })
        this.plant01 = new THREE.Sprite(this.plant01Material)


        // Plant 02
        this.plant02Texture = this.resources.items.plant02
        this.plant02Texture.encoding = THREE.sRGBEncoding
        this.plant02Material = new THREE.SpriteMaterial({
            map: this.plant02Texture,
            rotation: -0.55
        })
        this.plant02 = new THREE.Sprite(this.plant02Material)


        // Plant 03
        this.plant03Texture = this.resources.items.plant03
        this.plant03Texture.encoding = THREE.sRGBEncoding
        this.plant03Material = new THREE.SpriteMaterial({
            map: this.plant03Texture,
            rotation: 1.0
        })
        this.plant03 = new THREE.Sprite(this.plant03Material)


        // Lianen 01
        this.lianen01Texture = this.resources.items.lianen01
        this.lianen01Texture.encoding = THREE.sRGBEncoding
        this.lianen01Material = new THREE.SpriteMaterial({
            map: this.lianen01Texture,
        })
        this.lianen01 = new THREE.Sprite(this.lianen01Material)

        // Lianen 02
        this.lianen02Texture = this.resources.items.lianen02
        this.lianen02Texture.encoding = THREE.sRGBEncoding
        this.lianen02Material = new THREE.SpriteMaterial({
            map: this.lianen02Texture,
        })
        this.lianen02 = new THREE.Sprite(this.lianen02Material)


        // Lianen 03
        this.lianen03Texture = this.resources.items.lianen02
        this.lianen03Texture.encoding = THREE.sRGBEncoding
        this.lianen03Material = new THREE.SpriteMaterial({
            map: this.lianen03Texture,
        })
        this.lianen03 = new THREE.Sprite(this.lianen03Material)


        //Positioning
        this.backgroundSprite.scale.set(18, 18, 0)
        this.backgroundSprite.position.set(18.4, 0, -10)

        this.backgroundHillSprite.scale.set(7, 7, 0)
        this.backgroundHillSprite.position.set(22.1, 1.5, 0)

        this.backgroundHillSprite02.scale.set(7, 7, 0)
        this.backgroundHillSprite02.position.set(14.34, 0.62, 0)

        this.backgroundTree01.scale.set(4, 4, 0)
        this.backgroundTree01.position.set(16.55, 0, 0)

        this.backgroundTree02.scale.set(4, 4, 0)
        this.backgroundTree02.position.set(19.25, 0, 0)

        this.plant01.scale.set(1.5, 1.5, 0)
        this.plant01.position.set(19.0, -0.8, 1)

        this.plant02.scale.set(1.5, 1.5, 0)
        this.plant02.position.set(16.4, -0.3, 2)

        this.plant03.scale.set(1.5, 1.5, 0)
        this.plant03.position.set(19.35, -0.4, 2)

        this.lianen01.scale.set(8, 8, 0)
        this.lianen01.position.set(17.05, -1.45, 0)

        this.lianen02.scale.set(4.5, 4.5, 0)
        this.lianen02.position.set(17.05, 0, 0)

        this.lianen03.scale.set(4.5, 4.5, 0)
        this.lianen03.position.set(22, 1.2, 0)

        this.scene.add
            (
                this.backgroundSprite,
                this.backgroundHillSprite,
                this.backgroundHillSprite02,
                this.backgroundTree01,
                this.backgroundTree02,
                this.plant01,
                this.plant02,
                this.plant03,
                this.lianen01,
                this.lianen02,
                this.lianen03
            );
    }

    // Debug
    // debugJungle() 
    // {
    //     Background
    //     this.debug.ui.add(this.backgroundSprite.position, 'x', -4, 30, 0.01).name('bg // x-pos:')
    //     this.debug.ui.add(this.backgroundSprite.position, 'y', -4, 30, 0.01,).name('bg // y-pos:')

    //     this.debug.ui.add(this.backgroundHillSprite.position, 'x', -4, 30, 0.01).name('bgHill01 // x-pos:')
    //     this.debug.ui.add(this.backgroundHillSprite.position, 'y', -4, 30, 0.01,).name('bgHill01 // y-pos:')

    //     this.debug.ui.add(this.backgroundHillSprite02.position, 'x', -4, 30, 0.01).name('bgHill02 // x-pos:')
    //     this.debug.ui.add(this.backgroundHillSprite02.position, 'y', -4, 30, 0.01,).name('bgHill02 // y-pos:')

    //     Trees
    //     this.debug.ui.add(this.backgroundTree01.position, 'x', -4, 30, 0.01).name('bgTree01 // x-pos:')
    //     this.debug.ui.add(this.backgroundTree01.position, 'y', -4, 30, 0.01,).name('bgTree01 // y-pos:')

    //     this.debug.ui.add(this.backgroundTree02.position, 'x', -4, 30, 0.01).name('bgTree02 // x-pos:')
    //     this.debug.ui.add(this.backgroundTree02.position, 'y', -4, 30, 0.01,).name('bgTree02 // y-pos:')

    //     Plants
    //     this.debug.ui.add(this.plant01.position, 'x', -4, 30, 0.01).name('plant01 // x-pos:')
    //     this.debug.ui.add(this.plant01.position, 'y', -4, 30, 0.01,).name('plant01 // y-pos:')

    //     this.debug.ui.add(this.plant02.position, 'x', -4, 30, 0.01).name('plant02 // x-pos:')
    //     this.debug.ui.add(this.plant02.position, 'y', -4, 30, 0.01,).name('plant02 // y-pos:')

    //     this.debug.ui.add(this.plant03.position, 'x', -4, 30, 0.01).name('plant03 // x-pos:')
    //     this.debug.ui.add(this.plant03.position, 'y', -4, 30, 0.01,).name('plant03 // y-pos:')

    //     Lianen
    //     this.debug.ui.add(this.lianen01.position, 'x', -4, 30, 0.01).name('lianen01 // x-pos:')
    //     this.debug.ui.add(this.lianen01.position, 'y', -4, 30, 0.01,).name('lianen01 // y-pos:')

    //     this.debug.ui.add(this.lianen02.position, 'x', -4, 30, 0.01).name('lianen02 // x-pos:')
    //     this.debug.ui.add(this.lianen02.position, 'y', -4, 30, 0.01,).name('lianen02 // y-pos:')

    //     this.debug.ui.add(this.lianen03.position, 'x', -4, 30, 0.01).name('lianen03 // x-pos:')
    //     this.debug.ui.add(this.lianen03.position, 'y', -4, 30, 0.01,).name('lianen03 // y-pos:')

    // }


}