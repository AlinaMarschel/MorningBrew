import * as THREE from 'three'
import Experience from "../Experience";
import gsap from "gsap"

const jungleSprites = [
    {
        source: "jungleHillBackground02",
        scale: {x:  10,  y: 10, z: 0},
        position: {x: 10, y: 10, z: 0},
        direction: "right",
        targetX: 10
    }, 
    {
        source: "jungleHillBackground03",
        scale: {x:  10,  y: 10, z: 0},
        position: {x: 10, y: 10, z: 10},
        direction: "left",
        targetX: 8
    }
]


export default class Jungle {

    constructor() {
        this.experience = new Experience()
        this.debug = this.experience.debug
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        
        this.initLayers()
    }

    playAnimation() {
        for (let i = 0; i < jungleSprites.length; i++) {
            const s = jungleSprites[i]
            
            // let test = 0
            // if(s.direction == "left") {
            //     test = 5
            // } else {
            //     test = -5
            // }

            //wie gehts ? gut : schlecht
            gsap.to(s.sprite.position, {
                x: s.direction === "left" ? -s.targetX : s.targetX,
                duration: 5,
                delay: i + 1
            })
        }
    }
    
    initLayers() {
        jungleSprites.forEach(s => {
            const texture = this.resources.items[s.source]
            texture.encoding = THREE.sRGBEncoding
            const material = new THREE.SpriteMaterial({ map: texture })
            const sprite = new THREE.Sprite(material)

            sprite.position.set(s.position.x, s.position.y, s.position.z)
            sprite.scale.set(s.scale.x, s.scale.y, s.scale.z)

            this.scene.add(sprite)

            s.sprite = sprite
        })
    }

    setSprite() {
        // Background Color
        this.backgroundTexture = this.resources.items.jungleBackground
        this.backgroundTexture.encoding = THREE.sRGBEncoding
        this.backgroundMaterial = new THREE.SpriteMaterial({
            map: this.backgroundTexture
        });
        this.backgroundSprite = new THREE.Sprite(this.backgroundMaterial);

        // Background Color
        this.backgroundTexture01 = this.resources.items.jungleBackground
        this.backgroundTexture01.encoding = THREE.sRGBEncoding
        this.backgroundMaterial01 = new THREE.SpriteMaterial({
            map: this.backgroundTexture01
        });
        this.backgroundSprite01 = new THREE.Sprite(this.backgroundMaterial01);

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

        // Background Hill 03
        this.backgroundHillTexture03 = this.resources.items.jungleHillBackground03
        this.backgroundHillTexture03.encoding = THREE.sRGBEncoding
        this.backgroundHillMaterial03 = new THREE.SpriteMaterial({
            map: this.backgroundHillTexture03
        });
        this.backgroundHillSprite03 = new THREE.Sprite(this.backgroundHillMaterial03);


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
            rotation: -0.15
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
            rotation: 0.5
        })
        this.plant03 = new THREE.Sprite(this.plant03Material)

        // Plant 04
        this.plant04Texture = this.resources.items.plant04
        this.plant04Texture.encoding = THREE.sRGBEncoding
        this.plant04Material = new THREE.SpriteMaterial({
            map: this.plant04Texture,
            rotation: 0.5
        })
        this.plant04 = new THREE.Sprite(this.plant04Material)

        // Plant 05
        this.plant05Texture = this.resources.items.plant05
        this.plant05Texture.encoding = THREE.sRGBEncoding
        this.plant05Material = new THREE.SpriteMaterial({
            map: this.plant05Texture,
        })
        this.plant05 = new THREE.Sprite(this.plant05Material)

        // Plant 06
        this.plant06Texture = this.resources.items.plant06
        this.plant06Texture.encoding = THREE.sRGBEncoding
        this.plant06Material = new THREE.SpriteMaterial({
            map: this.plant06Texture,
            rotation: -0.15
        })
        this.plant06 = new THREE.Sprite(this.plant06Material)


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


        // Lianen 04
        this.lianen04Texture = this.resources.items.lianen01
        this.lianen04Texture.encoding = THREE.sRGBEncoding
        this.lianen04Material = new THREE.SpriteMaterial({
            map: this.lianen04Texture,
        })
        this.lianen04 = new THREE.Sprite(this.lianen04Material)

        // Lianen 05
        this.lianen05Texture = this.resources.items.lianen01
        this.lianen05Texture.encoding = THREE.sRGBEncoding
        this.lianen05Material = new THREE.SpriteMaterial({
            map: this.lianen05Texture,
        })
        this.lianen05 = new THREE.Sprite(this.lianen05Material)


        //Positioning

        // this.backgroundSprite.scale.set(80, 80, 0)
        // this.backgroundSprite.position.set(0, 0, -50)

        this.backgroundSprite.scale.set(18, 18, 0)
        this.backgroundSprite.position.set(18.4, 0, -10)

        this.backgroundSprite01.scale.set(18, 18, 0)
        this.backgroundSprite01.position.set(29.4, 0, -10)

        this.backgroundHillSprite.scale.set(7, 7, 0)
        this.backgroundHillSprite.position.set(22.1, 1.5, 0)

        this.backgroundHillSprite02.scale.set(7, 7, 0)
        this.backgroundHillSprite02.position.set(14.34, 0.62, 0)

        this.backgroundHillSprite03.scale.set(6, 6, 0)
        this.backgroundHillSprite03.position.set(30.5, 0.5, 0)

        this.backgroundTree01.scale.set(4, 4, 0)
        this.backgroundTree01.position.set(16.55, 0, 0)

        this.backgroundTree02.scale.set(4, 4, 0)
        this.backgroundTree02.position.set(22.25, 0, 0)

        this.plant01.scale.set(2.5, 2.5, 0)
        this.plant01.position.set(17.88, -1, 2.5)

        this.plant02.scale.set(1.5, 1.5, 0)
        this.plant02.position.set(16.4, -0.4, 2)

        this.plant03.scale.set(1.5, 1.5, 0)
        this.plant03.position.set(24.35, -0.6, 2)

        this.plant04.scale.set(2.2, 2.2, 0)
        this.plant04.position.set(30.35, -0.4, 2)

        this.plant05.scale.set(1.8, 1.8, 0)
        this.plant05.position.set(12.35, -0.4, 2.35)

        this.plant06.scale.set(2.5, 2.5, 0)
        this.plant06.position.set(21.88, -1.25, 2.5)

        this.lianen01.scale.set(8, 8, 0)
        this.lianen01.position.set(15.05, -1.32, 0)

        this.lianen02.scale.set(4.5, 4.5, 0)
        this.lianen02.position.set(14.29, 0, 0)

        this.lianen03.scale.set(4.5, 4.5, 0)
        this.lianen03.position.set(30, 2.42, 0)

        this.lianen04.scale.set(8, 8, 0)
        this.lianen04.position.set(22.05, -1.45, 0)

        this.lianen05.scale.set(8, 8, 0)
        this.lianen05.position.set(28, -1.2, 0)

        this.scene.add
            (
                this.backgroundSprite,
                this.backgroundSprite01,
                this.backgroundHillSprite,
                this.backgroundHillSprite02,
                this.backgroundHillSprite03,
                this.backgroundTree01,
                this.backgroundTree02,
                this.plant01,
                this.plant02,
                this.plant03,
                this.plant04,
                this.plant05,
                this.plant06,
                this.lianen01,
                this.lianen02,
                this.lianen03,
                this.lianen04,
                this.lianen05
            );
    }

    // Debug
    debugJungle() {

        //Background
        // this.debug.ui.add(this.backgroundSprite.position, 'x', -4, 30, 0.01).name('bg // x-pos:')
        // this.debug.ui.add(this.backgroundSprite.position, 'y', -4, 30, 0.01,).name('bg // y-pos:')

        // this.debug.ui.add(this.backgroundHillSprite.position, 'x', -4, 30, 0.01).name('bgHill01 // x-pos:')
        // this.debug.ui.add(this.backgroundHillSprite.position, 'y', -4, 30, 0.01,).name('bgHill01 // y-pos:')

        // this.debug.ui.add(this.backgroundHillSprite02.position, 'x', -4, 30, 0.01).name('bgHill02 // x-pos:')
        // this.debug.ui.add(this.backgroundHillSprite02.position, 'y', -4, 30, 0.01,).name('bgHill02 // y-pos:')

        //Trees
        this.debug.ui.add(this.backgroundTree01.position, 'x', -4, 30, 0.01).name('bgTree01 // x-pos:')
        this.debug.ui.add(this.backgroundTree01.position, 'y', -4, 30, 0.01,).name('bgTree01 // y-pos:')

        this.debug.ui.add(this.backgroundTree02.position, 'x', -4, 30, 0.01).name('bgTree02 // x-pos:')
        this.debug.ui.add(this.backgroundTree02.position, 'y', -4, 30, 0.01,).name('bgTree02 // y-pos:')

        //Plants
        this.debug.ui.add(this.plant01.position, 'x', -4, 30, 0.01).name('plant01 // x-pos:')
        this.debug.ui.add(this.plant01.position, 'y', -4, 30, 0.01,).name('plant01 // y-pos:')

        this.debug.ui.add(this.plant02.position, 'x', -4, 30, 0.01).name('plant02 // x-pos:')
        this.debug.ui.add(this.plant02.position, 'y', -4, 30, 0.01,).name('plant02 // y-pos:')

        this.debug.ui.add(this.plant03.position, 'x', -4, 30, 0.01).name('plant03 // x-pos:')
        this.debug.ui.add(this.plant03.position, 'y', -4, 30, 0.01,).name('plant03 // y-pos:')

        //Lianen
        this.debug.ui.add(this.lianen01.position, 'x', -4, 30, 0.01).name('lianen01 // x-pos:')
        this.debug.ui.add(this.lianen01.position, 'y', -4, 30, 0.01,).name('lianen01 // y-pos:')

        this.debug.ui.add(this.lianen02.position, 'x', -4, 30, 0.01).name('lianen02 // x-pos:')
        this.debug.ui.add(this.lianen02.position, 'y', -4, 30, 0.01,).name('lianen02 // y-pos:')

        this.debug.ui.add(this.lianen03.position, 'x', -4, 30, 0.01).name('lianen03 // x-pos:')
        this.debug.ui.add(this.lianen03.position, 'y', -4, 30, 0.01,).name('lianen03 // y-pos:')

    }
}