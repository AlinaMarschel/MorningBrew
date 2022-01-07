import * as THREE from 'three'
import Experience from "../Experience";
import Coffeebag from './Coffeebag';
import Coffeebeans from './Coffeebeans';
import Globe from './Globe';
import GlobeLanding from './GlobeLanding';
import Particle from './Particle';


export default class World 
{

    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // Wait for Resources
        this.resources.on('ready', () =>
        {
            this.coffeebag = new Coffeebag()
            this.coffeebeans = new Coffeebeans()
            this.globe = new Globe()
            this.globeLanding = new GlobeLanding()
            this.particles = new Particle()
            console.log('resources are ready')
        })

        this.update()
    }

    update()
    {
        if(this.coffeebeans) 
        {
            this.coffeebeans.update()
        }
    }

}