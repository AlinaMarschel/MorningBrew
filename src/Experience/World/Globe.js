import * as THREE from "three";
import Experience from "../Experience";

export default class Globe {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.resource = this.resources.items.globeModel;

    this.setTexture();
    this.setMaterial();
    this.setModel();
  }

  setModel() {
    this.model = this.resource.scene;

    this.model.scale.set(2, 2, 2);
    this.model.position.y = -1.8;

    const globeWater = this.model.children.find((child) => child.name === "water");
    const globeEarth = this.model.children.find((child) => child.name === "earth");

    globeWater.material = this.matcapWaterMaterial;
    globeEarth.material = this.matcapEarthMaterial;

    this.scene.add(this.model);

    this.previousMousePosition = { x: 0, y: 0 };

    document.addEventListener("mousedown", () => this.onMouseDown(), false);
    document.addEventListener("mouseup", () => this.onMouseUp(), false);
    document.addEventListener("mouseout", () => this.onMouseUp(), false);
    document.addEventListener("mousemove", (event) => this.onMouseMove(event),false);
  }

  setTexture() {
    this.textures = {};
    this.textures.matcapWater = this.resources.items.matCapWaterTexture;
    this.textures.matcapEarth = this.resources.items.matCapEarthTexture;
  }

  setMaterial() {
    this.matcapWaterMaterial = new THREE.MeshMatcapMaterial();
    this.matcapWaterMaterial.matcap = this.textures.matcapWater;

    this.matcapEarthMaterial = new THREE.MeshMatcapMaterial();
    this.matcapEarthMaterial.matcap = this.textures.matcapEarth;
  }

  onMouseDown() {
    this.isDown = true;
  }

  onMouseMove(e) {
    const deltaMove = {
      x: e.offsetX - this.previousMousePosition.x,
      y: e.offsetY - this.previousMousePosition.y,
    };

    if (this.isDown) {
      const deltaRotationQuaternion = new THREE.Quaternion().setFromEuler(
        new THREE.Euler(
          this.toRadians(deltaMove.y * 0.1),
          this.toRadians(deltaMove.x * 0.1),
          0,
          "XYZ"
        )
      );

      this.model.quaternion.multiplyQuaternions(
        deltaRotationQuaternion,
        this.model.quaternion
      );
    }

    this.previousMousePosition = {
      x: e.offsetX,
      y: e.offsetY,
    };
  }

  onMouseUp() {
    this.isDown = false;
  }

  toRadians(angle) {
    return angle * (Math.PI / 180);
  }

  update() {}
}