import * as THREE from 'three'
import Experience from "../Experience";
import gsap from 'gsap'
import GlobeMaster from './GlobeMaster';

export default class Globe extends GlobeMaster
{
    constructor()
    {
        super()


        this.experience = new Experience()
        this.scene = this.experience.scene
        this.globe = new GlobeMaster()
        this.model = this.globe.model

        this.setModel(3.2, -1)
        this.onClick()

        this.scene.add(this.model)
    }



    onClick()
    {
        const button = document.querySelector('a.btn-action')

        button.addEventListener('click', () => {
            gsap.to(
                this.model.rotation, {
                duration: 1.2,
                ease: 'power2.inOut',
                y: '-= 10.5deg'
                }
            )

        })
    }



}