import Experience from "./Experience"
import gsap from 'gsap'

export default class Transition {

    parameters = {
        duration: 20,
    }

    domElements = {
        landingButton: document.getElementById('explore'),
        landingPage: document.getElementById('landingpage'),
        scrollContainer: document.getElementById('scroll-container'),
        jungleText: document.getElementById('jungle-text'),
        earthButton: document.getElementById('earth-icon')
    }

    constructor() {
        this.experience = new Experience()
        this.camera = this.experience.camera.instance
        this.world = this.experience.world
        

        this.onButtonClick()
        this.onEarthClick()
    }

    onButtonClick() {
        this.domElements.landingButton.addEventListener('click', () => {
            this.startTransition()
        })
    }

    onEarthClick() {
        this.domElements.earthButton.addEventListener('click', () => {
            this.startBackTransition()
        })
    }

    startTransition() {
        this.domElements.landingPage.style.bottom = '-200%'
        this.domElements.jungleText.style.bottom = '-100%'
        this.domElements.scrollContainer.style.bottom = '0%'

        this.world.jungle.playAnimation()
        this.world.globe.playAnimation()

        gsap.to(
            this.camera.position, {
            duration: this.parameters.duration,
            ease:'slow (0.5, 2, true)',
            z: -80,
            y: 1.5
        });  
    }

    startBackTransition() {
        this.domElements.landingPage.style.bottom = '0%'
        this.domElements.scrollContainer.style.bottom = '-100%'
        this.domElements.scrollContainer.style.transition = ' all 1.5s'

        this.world.jungle.playBackToScreen()
        this.world.globe.playBackToScreen()

        this.camera.lookAt(this.world.globe -2.5)
        console.log(this.world.globe.position)

        // gsap.to(
        //     this.camera.position, {
        //     duration: .25,
        //     ease: 'power2.inOut',
        //     z: 6,
        //     y: 0,
        // }); 
        
    }

}