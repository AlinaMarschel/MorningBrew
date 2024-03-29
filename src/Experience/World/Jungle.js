import * as THREE from 'three'
import Experience from "../Experience";
import { gsap } from "gsap";



export default class Jungle {

    constructor() {
        this.experience = new Experience()
        this.debug = this.experience.debug
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        //this.initLayers()
        this.setSprite()
        this.playPlantLoopAnimation()
    }

    timelineIntro() {
        this.tlIntro = gsap.timeline()

        this.tlIntro.fromTo(this.backgroundSprite.position, { y: 80, z: -80 }, { duration: 4, y: 0, z: -55 })
        this.tlIntro.fromTo(this.backgroundHillSprite02.position, { x: -80 }, { duration: 2, x: -12, y: 0 }, ">-=4")
        this.tlIntro.fromTo(this.backgroundHillSprite03.position, { x: 80 }, { duration: 2, x: 15 }, ">-=1")
        this.tlIntro.fromTo(this.backgroundHillSprite.position, { x: -80 }, { duration: 2, x: 0, y: 5.5 }, ">-=2")

        return this.tlIntro
    }

    timelineMiddle() {
        this.tlMiddle = gsap.timeline()

        this.tlMiddle.fromTo(this.backgroundTree02.position, { x: 80, y: -80 }, { duration: 2, x: 1.25, y: 0.25, z: -23 })
        this.tlMiddle.fromTo(this.backgroundTree01.position, { x: -80 }, { duration: 2, x: -4.5, z: -25 }, ">-=2")
        this.tlMiddle.fromTo(this.plant02.position, { x: -80, y: -80 }, { duration: 2.5, x: -13, y: -5, z: -40 }, ">-=2")
        this.tlMiddle.fromTo(this.plant03.position, { x: 80, y: -80 }, { duration: 2.5, x: 11, y: -2.25, z: -34 }, ">-=2")

        return this.tlMiddle
    }

    timelineEnd() {
        this.tlEnd = gsap.timeline()
        this.tlEnd.fromTo(this.plant05.position, { x: -80, y: -80 }, { duration: 2.5, x: -8.5, y: -1.25, z: -18 })
        this.tlEnd.fromTo(this.plant04.position, { x: 80, y: -80 }, { duration: 2.5, x: 10, y: -2, z: -20 }, ">-=2")
        this.tlEnd.fromTo(this.lianen02.position, { y: 80 }, { duration: 2.5, x: 5, y: -1.25, z: -21 }, ">-=2")
        this.tlEnd.fromTo(this.lianen01.position, { y: 80 }, { duration: 2.5, x: 1, y: -10.5, z: -33 }, ">-=2")

        return this.tlEnd
    }


    timelineBackToScreen() {

        this.tlBacktoScreen = gsap.timeline()

        this.tlIntro.to(this.backgroundSprite.position, { y: -100, z: -100, duration: .2 })
        this.tlIntro.to(this.backgroundHillSprite02.position, { x: -100, duration: .2 }, ">-=4")
        this.tlIntro.to(this.backgroundHillSprite03.position, { x: -100, duration: .2 }, ">-=1")
        this.tlIntro.to(this.backgroundHillSprite.position, { x: -100, duration: .2 }, ">-=2")

        this.tlMiddle.to(this.backgroundTree02.position, { x: 80, y: -80, duration: .2 })
        this.tlMiddle.to(this.backgroundTree01.position, { x: -80, duration: .2 }, ">-=2")
        this.tlMiddle.to(this.plant02.position, { x: -80, y: -80, duration: .2 }, ">-=2")
        this.tlMiddle.to(this.plant03.position, { x: 80, y: -80, duration: .2 }, ">-=2")

        this.tlEnd.to(this.plant05.position, { x: -80, duration: .2 })
        this.tlEnd.to(this.plant04.position, { x: 80, duration: .2 }, ">-=2")
        this.tlEnd.to(this.lianen02.position, { y: 80, duration: .2 }, ">-=2")
        this.tlEnd.to(this.lianen01.position, { y: 80, duration: .2 }, ">-=2")

        return this.tlBacktoScreen
    }

    playAnimation() {
        this.masterTimeline = gsap.timeline()
        this.masterTimeline.add(this.timelineIntro())
            .add(this.timelineMiddle(), "-=4")
            .add(this.timelineEnd(), "-=5")
    }


    playBackToScreen() {
        gsap.to(this.backgroundSprite.position, { y: -100, z: -100, duration: .0025 })
        gsap.to(this.backgroundHillSprite02.position, { y: -100, z: -100, duration: .0025 })
        gsap.to(this.backgroundHillSprite03.position, { y: -100, z: -100, duration: .0025 })
        gsap.to(this.backgroundHillSprite.position, { y: -100, z: -100, duration: .0025 })
        gsap.to(this.backgroundTree02.position, { y: -100, z: -100, duration: .0025 })
        gsap.to(this.backgroundTree01.position, { y: -100, z: -100, duration: .0025 })
        gsap.to(this.plant02.position, { y: -100, z: -100, duration: .0025 })
        gsap.to(this.plant03.position, { y: -100, z: -100, duration: .0025 })
        gsap.to(this.plant05.position, { y: -100, z: -100, duration: .0025 })
        gsap.to(this.plant04.position, { y: -100, z: -100, duration: .0025 })
        gsap.to(this.lianen01.position, { y: -100, z: -100, duration: .0025 })
        gsap.to(this.lianen02.position, { y: -100, z: -100, duration: .0025 })
    }

    playPlantLoopAnimation() {
        gsap.fromTo(this.plant01Material, { rotation: -0.5 }, { duration: 5.5, rotation: -0.58, yoyo: true, repeat: Infinity });
        gsap.fromTo(this.plant06Material, { rotation: 0.8 }, { duration: 2.5, rotation: 0.845, yoyo: true, repeat: Infinity });
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
        this.plant01Texture = this.resources.items.plant02
        this.plant01Texture.encoding = THREE.sRGBEncoding
        this.plant01Material = new THREE.SpriteMaterial({
            map: this.plant01Texture,
            rotation: -0.5
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
            rotation: 1
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
        this.plant06Texture = this.resources.items.plant03
        this.plant06Texture.encoding = THREE.sRGBEncoding
        this.plant06Material = new THREE.SpriteMaterial({
            map: this.plant06Texture,
            rotation: 0.8
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

        this.backgroundSprite.scale.set(80, 80, 0)
        this.backgroundSprite.position.set(0, -100, -55)

        this.backgroundHillSprite.scale.set(40, 40, 0)
        //this.backgroundHillSprite.position.set(12, 8, -53)
        this.backgroundHillSprite.position.set(-100, 8, -53)

        this.backgroundHillSprite02.scale.set(30, 30, 0)
        //this.backgroundHillSprite02.position.set(-12, 0, -30)
        this.backgroundHillSprite02.position.set(-100, 0, -30)

        this.backgroundHillSprite03.scale.set(44, 44, 0)
        //this.backgroundHillSprite03.position.set(15, 5, -40)
        this.backgroundHillSprite03.position.set(-100, 5, -40)

        this.backgroundTree01.scale.set(14, 14, 0)
        //this.backgroundTree01.position.set(-4.25, 0.25, -10)
        this.backgroundTree01.position.set(-100, 0.25, -10)

        this.backgroundTree02.scale.set(14, 14, 0)
        //this.backgroundTree02.position.set(1, 0, 0)
        this.backgroundTree02.position.set(-100, 0, 0)

        this.plant01.scale.set(1.35, 1.35, 0)
        this.plant01.position.set(-2.1, -0.65, 2.4)

        this.plant02.scale.set(16, 16, 0)
        //this.plant02.position.set(-18, -4, -35)
        this.plant02.position.set(-100, -4, -35)

        this.plant03.scale.set(15, 15, 0)
        //this.plant03.position.set(20, -2, -34)
        this.plant03.position.set(100, -2, -34)

        this.plant04.scale.set(15, 15, 0)
        //this.plant04.position.set(10, -2, -15)
        this.plant04.position.set(100, -2, -15)

        this.plant05.scale.set(10, 10, 0)
        // this.plant05.position.set(-12, -3, -15)
        this.plant05.position.set(-100, -3, -15)

        this.plant06.scale.set(1.2, 1.2, 0)
        this.plant06.position.set(2.15, -0.9, 2.25)

        this.lianen01.scale.set(40, 40, 0)
        // this.lianen01.position.set(0, -8, -30)
        this.lianen01.position.set(0, 80, -30)

        this.lianen02.scale.set(20, 20, 0)
        // this.lianen02.position.set(-1, 0, -21)
        this.lianen02.position.set(0, 100, -21)

        this.lianen03.scale.set(4.5, 4.5, 0)
        this.lianen03.position.set(0, 0, 0)

        this.lianen04.scale.set(10, 10, 0)
        this.lianen04.position.set(-10, -5, 0)

        this.lianen05.scale.set(8, 80, 0)
        this.lianen05.position.set(0, 0, 0)

        this.scene.add
            (
                this.backgroundSprite,
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
                //this.lianen03,
                //this.lianen04,
                //this.lianen05
            );

        console.log(this.backgroundSprite)
    }

    // update() {
    //     this.playPlantLoopAnimation()
    // }

    // Debug
    debugJungle() {


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