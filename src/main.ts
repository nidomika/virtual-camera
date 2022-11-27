import { bindKeys } from './bindKeys'
import { renderLoop } from './renderLoop'
import { cubes } from './scene'
import './style.css'

const canvas = document.querySelector<HTMLCanvasElement>('#canvas')!
const ctx = canvas.getContext('2d')!
ctx.canvas.width = window.innerWidth
ctx.canvas.height = window.innerHeight
ctx.fillStyle = 'red'

const camera: Camera = {
  pov: 90,
  x: 0,
  y: 0,
  z: 0,
  rotationX: 0,
  rotationY: 0,
  rotationZ: 0,
}
console.log(cubes)
bindKeys(camera)

renderLoop(() => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.fillRect(camera.x, camera.y, 10, 10)
})
