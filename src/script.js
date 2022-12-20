import './style.css'
import Experience from './Experience/Experience.js'

// import * as THREE from 'three'
// import * as dat from 'lil-gui'
// import gsap from 'gsap'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
// import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';


const experience = new Experience(document.querySelector('canvas.webgl'))

// /**
//  * Debug
//  */
// const gui = new dat.GUI()

// const parameters = {
//     materialColor: '#ffeded'
// }

// /**
//  * Textureloader
//  */
//  const textureLoader = new THREE.TextureLoader()
//  const gradientTexture = textureLoader.load('textures/gradients/3.jpg')
//  gradientTexture.magFilter = THREE.NearestFilter

//  const globeTexture = textureLoader.load('./textures/globe.jpg')


//  /**
//   * Draco Loader
//   */

// const dracoLoader = new DRACOLoader()
// dracoLoader.setDecoderPath('draco/')

//  /**
//   * GLTF Loader
//   */

// const gltfLoader = new GLTFLoader()
// gltfLoader.setDRACOLoader(dracoLoader)


// /**
//  * Debug GUI
//  */
// gui
//     .addColor(parameters, 'materialColor')
//     .onChange(() => {
//         material.color.set(parameters.materialColor)
//     })


// /**
//  * Base
//  */

// // Canvas
// const canvas = document.querySelector('canvas.webgl')

// // Scene
// const scene = new THREE.Scene()




// //Baked Material
// const bakedTexture = textureLoader.load('./models/coffeebag/baked.jpg')
// const bakedMaterial = new THREE.MeshBasicMaterial({
//     map: bakedTexture
// })

// bakedTexture.anisotropy = 32
// bakedTexture.flipY = false
// bakedTexture.encoding = THREE.sRGBEncoding


// const matcapTexture = textureLoader.load('./textures/matcaps/pink_matcap.png')
// const matcapMaterial = new THREE.MeshMatcapMaterial()
// matcapMaterial.matcap = matcapTexture


// const matcapWater = textureLoader.load('./textures/matcaps/darkgreen_matcap.png')
// const matcapWaterMaterial = new THREE.MeshMatcapMaterial()
// matcapWaterMaterial.matcap = matcapWater

// const matcapBean = textureLoader.load('./textures/matcaps/bean_matcap01.png')
// const matcapBeanMaterial = new THREE.MeshMatcapMaterial()
// matcapBeanMaterial.matcap = matcapBean

// /**
//  * Objects
//  */

// // Coffeebags

// gltfLoader.load(
//     './models/coffeebag/coffee_bag_bake.glb',
//     (gltf) => {
//         gltf.scene.scale.set(0.4, 0.4, 0.4)
//         gltf.scene.position.x = 3
//         gltf.scene.position.y = -1
//         gltf.scene.position.z = -3
//         gltf.scene.rotation.y = 0.18;

//         gltf.scene.traverse((child) => {
//             child.material = bakedMaterial
//         })
//         scene.add(gltf.scene)
//     }
// )

// // Coffeebean

// let beanParticle = new THREE.Object3D()
// let beanArray = []

// gltfLoader.load(
//     './models/coffeebag/beans.glb',
//     (gltf) => {
//         gltf.scene.scale.set(0.5, 0.5, 0.5)
//         gltf.scene.position.x = 0.5
//         gltf.scene.position.y = -1.3
//         gltf.scene.position.z = -1.5
//         gltf.scene.rotation.y = -Math.PI / 2;

//         beanParticle = gltf.scene;

//         gltf.scene.traverse((children) => {
//             children.material = matcapBeanMaterial

//             if(children.name.includes('bean')) {
//                 beanArray.push(children)
//             }
//         })

//         console.log(beanArray)

//         //    const testBean1 = gltf.scene.children.find((child) => child.name === 'bean001')
//         //    const testBean2 = gltf.scene.children.find((child) => child.name === 'bean004')
//         //    const testBean3 = gltf.scene.children.find((child) => child.name === 'bean005')
//         //    beanArray.push(testBean1, testBean2, testBean3)

//         scene.add(gltf.scene)
//     }
// )


// // Globe

// let globe = new THREE.Object3D()

// gltfLoader.load(
//     './models/globe.glb',
//     (gltf) => {

//         globe = gltf.scene;

//         globe.scale.set(1.25, 1.25, 1.25)
//         globe.rotation.y = 3.6
//         globe.position.x = 3.2
//         globe.position.y = -3

//         const globeEarth = gltf.scene.children.find((child) => child.name === 'earth')
//         const globeWater = gltf.scene.children.find((child) => child.name === 'water')

//         globeEarth.material = matcapMaterial
//         globeWater.material = matcapWaterMaterial

//         scene.add(globe)
//     }
// )


// // Button Action Globe Rotation

// const button = document.querySelector('a.btn-action')

// button.addEventListener('click', () => {
//     //globe.rotation.y += 0.5

//     gsap.to(
//         globe.rotation, {
//         duration: 1.2,
//         ease: 'power2.inOut',
//         y: '-= 10.5deg'
//         }
//     )

// })

// const objectsDistance = 4

// /**
//  * Particles
//  */

// // Particle Geometry
// const particleCount = 300
// const positions = new Float32Array(particleCount * 3)

// for (let i = 0; i < particleCount; i++) {
//     positions[i * 3 + 0] = (Math.random() - 0.5) * 10
//     positions[i * 3 + 1] = objectsDistance * 0.5 - Math.random() * objectsDistance * 3
//     positions[i * 3 + 2] = (Math.random() - 0.5) * 10
// }

// const particlesGeometry = new THREE.BufferGeometry()
// particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))


// // Particle Material
// const particlesMaterial = new THREE.PointsMaterial({
//     color: parameters.materialColor,
//     sizeAttenuation : true,
//     size: 0.03
// })

// // Particle Points
// const particles = new THREE.Points(particlesGeometry, particlesMaterial)
// particles.position.y = -2.8
// scene.add(particles)

// /**
//  * Sizes
//  */
// const sizes = {
//     width: window.innerWidth,
//     height: window.innerHeight
// }

// window.addEventListener('resize', () =>
// {
//     // Update sizes
//     sizes.width = window.innerWidth
//     sizes.height = window.innerHeight

//     // Update camera
//     camera.aspect = sizes.width / sizes.height
//     camera.updateProjectionMatrix()

//     // Update renderer
//     renderer.setSize(sizes.width, sizes.height)
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// })

// /**
//  * Camera
//  */

// // Group
// const cameraGroup = new THREE.Group()
// scene.add(cameraGroup)

// // Base camera
// const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100)
// camera.position.z = 6
// cameraGroup.add(camera)


// /**
//  * Renderer
//  */
// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas,
//     alpha: true,
//     antialias: true
// })

// renderer.setSize(sizes.width, sizes.height)
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// renderer.outputEncoding = THREE.sRGBEncoding


// /**
//  * Scroll
//  */
// let scrollY = window.scrollY
// let currentSection = 0

// window.addEventListener('scroll', () => {
//     scrollY = window.scrollY
//     const newSection = Math.round(scrollY / sizes.height)

//     // if(newSection == 1) {
//     //     scene.add(particles)
//     // } else {
//     //     scene.remove(particles)
//     // }

//     // if(newSection != currentSection) {
//     //     currentSection = newSection

//     //     gsap.to(
//     //         sectionMeshes[currentSection].rotation, {
//     //             duration: 1.5,
//     //             ease: 'power2.inOut',
//     //             x: '+=6',
//     //             y: '+= 3'
//     //         }
//     //     )
//     // }

// })

// /**
//  * Cursor
//  */

// const cursor = {}
// cursor.x = 0
// cursor.y = 0

// window.addEventListener('mousemove', (event) => {
//     cursor.x = event.clientX / sizes.width - 0.5
//     cursor.y = event.clientY / sizes.height - 0.5
// })

// /**
//  * Animate
//  */
// const clock = new THREE.Clock()
// let previousTime = 0

// const tick = () =>
// {
//     const elapsedTime = clock.getElapsedTime()
//     const deltaTime = elapsedTime - previousTime
//     previousTime = elapsedTime

//     //Animate Camera
//     camera.position.y = -scrollY / sizes.height * objectsDistance

//     const parallaxX = cursor.x * 0.5
//     const parallaxY = - cursor.y * 0.5

//     cameraGroup.position.x += (parallaxX - cameraGroup.position.x) * 5 * deltaTime
//     cameraGroup.position.y += (parallaxY - cameraGroup.position.y) * 5 * deltaTime

//     //Animate meshes
//     // for(const mesh of sectionMeshes) {
//     //     mesh.rotation.x += deltaTime * 0.1
//     //     mesh.rotation.y += deltaTime * 0.12
//     // }


//     //Animate beans

//     for(let item of beanArray) {
//         item.rotation.x += deltaTime * 0.2
//         item.rotation.y += deltaTime * 0.23
//         item.rotation.z += deltaTime * 0.36
//     }

//     // Render
//     renderer.render(scene, camera)

//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick)
// }

// tick()