import * as THREE from 'three'
import Experience from "../Experience.js";
import Coffeepin from './Coffeepin.js';
import Globe from './Globe.js';
import Jungle from './Jungle.js';
import Particle from './Particle.js';


export default class World 
{

    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.sizes = this.experience.sizes
        this.resources = this.experience.resources

        // Wait for Resources
        this.resources.on('ready', () =>
        {
            this.coffeePin = new Coffeepin()
            this.globe = new Globe()
            this.particles = new Particle()
            this.jungle = new Jungle()
            console.log('resources are ready')
        })

        this.scrollY = window.scrollY
        this.currentSection = 0

        window.addEventListener('scroll', () => {
            this.scrollY = window.scrollY
            this.newSection = Math.round(this.scrollY / this.sizes.height)

                if(this.newSection != this.currentSection) {
                    this.currentSection = this.newSection
                }
        })

        this.update()
    }

    update()
    {
        if(this.coffeebeans) 
        {
            this.coffeebeans.update()
        }

        if(this.globe) 
        {
            this.globe.update()
        }

        // if(this.jungle) 
        // {
        //     this.jungle.update()
        // }
    }

}