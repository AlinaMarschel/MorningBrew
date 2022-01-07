import * as THREE from 'three'
import Experience from "../Experience";
import gsap from 'gsap'
import GlobeMaster from './GlobeMaster';

export default class GlobeLanding extends GlobeMaster
{
    constructor()
    {
        super()

        this.experience = new Experience()
        this.scene = this.experience.scene
        this.globe = new GlobeMaster()
        this.model = this.globe.model

        this.setModel(3.2 , -2)
        this.scene.add(this.model)
    }


}