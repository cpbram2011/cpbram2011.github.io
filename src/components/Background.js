import React from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const Background = () => {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000)
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg')
  })

  renderer.setPixelRatio( window.devicePixelRatio)
  renderer.setSize( window.innerWidth, window.innerHeight )
  // camera.position.setZ(30)

  // const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 )
  // const material = new THREE.MeshStandardMaterial( {color: 0xFF00FF, })
  // const torus = new THREE.Mesh( geometry, material )
  // scene.add(torus)

  // const pointLight = new THREE.PointLight(0xffffff)
  // pointLight.position.set(5, 5, 5)
  // scene.add(pointLight)

  const ambientLight = new THREE.AmbientLight(0x4422ee)
  scene.add(ambientLight)

  // const controls = new OrbitControls(camera, renderer.domElement) 
  const gridHelper = new THREE.GridHelper( 200, 50 )
  // scene.add( gridHelper)
  

  const addStar = () => {
    const geometry = new THREE.SphereGeometry(0.25, 24, 24)
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
    const star = new THREE.Mesh( geometry, material )

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 100 ))
    star.position.set(x, y, z)
    scene.add(star)
  }
  Array(400).fill().forEach(addStar)

  const moveCamera = () => {
    const isUserScroll = window.scrollY !== 0;

    if (isUserScroll) {
      const t = document.body.getBoundingClientRect().top;
      camera.rotation.x = t * -0.0003;
      // camera.position.z = t * -0.01
      // camera.position.y = t * -0.01
      // camera.position.x = t * -0.01
    }


  }

  document.body.onscroll = moveCamera



  const animate = () => {
    requestAnimationFrame( animate )
    // torus.rotation.x += 0.001
    // torus.rotation.y += 0.006
    // torus.rotation.z += 0.001
    camera.rotation.y += -0.001
    // camera.rotation.z += -0.0005

    // controls.update()
    renderer.render ( scene, camera )
  }
  animate()
}


export default Background