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
        jungleText: document.getElementById('jungle-text')
    }

    constructor() {
        this.experience = new Experience()
        this.camera = this.experience.camera.instance
        this.world = this.experience.world
        

        this.onButtonClick()
    }

    onButtonClick() {
        this.domElements.landingButton.addEventListener('click', () => {
            this.startTransition()
        })
    }

    startTransition() {
        this.domElements.landingPage.style.bottom = '-200%'
        this.domElements.jungleText.style.bottom = '-100%'
        this.domElements.scrollContainer.style.bottom = '0%'

        this.world.jungle.playAnimation()
        this.world.globe.playAnimation()

        // gsap.timeline()
        //     .from(this.camera.position,
        //         {
        //             duration: 1,
        //             ease:'slow (0.5, 0.4, false)',
        //             x: 100
        //         })

        gsap.to(
            this.camera.position, {
            duration: this.parameters.duration,
            // ease: 'power2.inOut',
            ease:'slow (0.5, 2, true)',
            // x: 40,
            z: -80,
            y: 1.5
        });  


    }
}