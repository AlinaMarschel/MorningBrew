import Experience from "./Experience"
import gsap from 'gsap'

export default class Transition {

    parameters = {
        duration: 3,
    }

    domElements = {
        landingButton: document.getElementById('explore'),
        landingPage: document.getElementById('landingpage'),
        scrollContainer: document.getElementById('scroll-container')
    }

    constructor() {
        this.experience = new Experience()
        this.camera = this.experience.camera.instance
        this.globe = this.experience.world.globe

        this.onButtonClick()
    }

    onButtonClick() {
        this.domElements.landingButton.addEventListener('click', () => {
            this.startTransition()
        })
    }

    startTransition() {
        this.domElements.landingPage.style.left = '-200%'
        this.domElements.scrollContainer.style.left = '0%'

        gsap.to(
            this.camera.position, {
            duration: this.parameters.duration,
            ease: 'power2.inOut',
            x: 40
        })

    }
}