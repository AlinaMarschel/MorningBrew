import Experience from "./Experience"
import gsap from 'gsap'

export default class Transition {

    parameters = {
        duration: 12,
    }

    domElements = {
        landingButton: document.getElementById('explore'),
        landingPage: document.getElementById('landingpage'),
        scrollContainer: document.getElementById('scroll-container'),
        jungleText: document.getElementById('jungle-text')
    }

    constructor() {
        this.experience = new Experience()
        this.camera = this.experience.camera.instance
        this.globe = this.experience.world.globe

        this.world = this.experience.world

        this.onButtonClick()
    }

    onButtonClick() {
        this.domElements.landingButton.addEventListener('click', () => {
            this.startTransition()
        })
    }

    startTransition() {
        this.domElements.landingPage.style.left = '-200%'
        this.domElements.jungleText.style.left= '-100%'
        this.domElements.scrollContainer.style.left = '0%'

        this.world.jungle.playAnimation()
        return

        gsap.to(
            this.camera.position, {
            duration: this.parameters.duration,
            // ease: 'power2.inOut',
            ease:'slow (0.5, 0.4, false)',
            x: 40,
            // z: -40,
            // y: 20
        });     
    
    }
}