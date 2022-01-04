import * as THREE from 'three'
import Experience from "../Experience";
import Coffeebag from './Coffeebag';
import Coffeebeans from './Coffeebeans';
import Globe from './Globe';


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
            console.log('resources are ready')
        })
    }

}