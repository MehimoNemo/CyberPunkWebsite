import * as THREE from "three";



const cubeDiv = document.getElementsByClassName("cube").item(0);
const cubeParent = document.parent

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, cubeDiv.clientWidth / cubeDiv.clientHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({alpha:true});
renderer.setSize(cubeDiv.clientWidth, cubeDiv.clientHeight);

cubeDiv.appendChild(renderer.domElement);

const geom = new THREE.SphereGeometry(3, 8, 3, 0, Math.PI*2, 0, Math.PI/2);

setGeom(geom, 0x0dcaf0 , 0, 0, 0);


renderer.setAnimationLoop(() => {
  renderer.render(scene, camera);
});

function setGeom(g, color, x, y, z) {
  ToQuads(g);
  let m = new THREE.LineBasicMaterial({
    color: color
  });
  let o = new THREE.LineSegments(g, m);
  o.position.set(x, y, z);
  scene.add(o);
}

function ToQuads(g) {
  let p = g.parameters;
  let segmentsX = (g.type == "TorusGeometry" ? p.tubularSegments : p.radialSegments) || p.widthSegments || p.thetaSegments || (p.points.length - 1) || 1;
  let segmentsY = (g.type == "TorusGeometry" ? p.radialSegments : p.tubularSegments) || p.heightSegments || p.phiSegments || p.segments || 1;
  let indices = [];
  for (let i = 0; i < segmentsY + 1; i++) {
    let index11 = 0;
    let index12 = 0;
    for (let j = 0; j < segmentsX; j++) {
      index11 = (segmentsX + 1) * i + j;
      index12 = index11 + 1;
      let index21 = index11;
      let index22 = index11 + (segmentsX + 1);
      indices.push(index11, index12);
      if (index22 < ((segmentsX + 1) * (segmentsY + 1) - 1)) {
        indices.push(index21, index22);
      }
    }
    if ((index12 + segmentsX + 1) <= ((segmentsX + 1) * (segmentsY + 1) - 1)) {
      indices.push(index12, index12 + segmentsX + 1);
    }
  }
  g.setIndex(indices);
}
camera.position.z = 5;
camera.position.y = 2;
camera.lookAt(0,0,0)

let isRotating = true;
let reverseRotationChance = 0.002; // Chance of reversing rotation

renderer.setAnimationLoop(() => {
    if (isRotating) {
        let shouldReverse = Math.random() < reverseRotationChance;

      if (shouldReverse) {
            geom.rotateY(-0.03 * Math.random()); // Reverse rotation
        } else {
            geom.rotateY(0.003); // Normal rotation
        }
    }
    
    renderer.setSize(cubeDiv.clientWidth, cubeDiv.clientHeight);
    renderer.render(scene, camera);
});
