import * as THREE from 'three'
import Experience from "../Experience";



export default class Particle 
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene

        this.particleCount = 300
        this.positions = new Float32Array(this.particleCount * 3)

        this.setMaterial()
        this.setModel()

    }

    setMaterial()
    {
        this.particlesMaterial = new THREE.PointsMaterial({
            color: 0xffffff,
            sizeAttenuation : true,
            size: 0.03
        })
    }

    setModel()
    {
        for (let i = 0; i < this.particleCount; i++) {
            this.positions[i * 3 + 0] = (Math.random() - 0.5) * 10
            this.positions[i * 3 + 1] = 4 * 0.5 - Math.random() * 4 * 3
            this.positions[i * 3 + 2] = (Math.random() - 0.5) * 10
        }

        this.particlesGeometry = new THREE.BufferGeometry()
        this.particlesGeometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3))

        this.particles = new THREE.Points(this.particlesGeometry, this.particlesMaterial)
        this.particles.position.y = 0
        this.scene.add(this.particles)

    }

}