import { renderLoop } from './renderLoop'
import { cubes } from './cubes'
import './style.css'

const canvas = document.querySelector<HTMLCanvasElement>('#canvas')!
const ctx = canvas.getContext('2d')!
ctx.canvas.width = window.innerWidth
ctx.canvas.height = window.innerHeight
ctx.fillStyle = 'red'

let cameraPov = 120
const vectors3d = cubes.flatMap(cube => cube.flatMap(face => face))

window.addEventListener('keydown', e => {
  if (e.key === 'w') {
    // move up
    vectors3d.forEach(v => v.moveDown(0.1))
  }
  if (e.key === 's') {
    // move down
    vectors3d.forEach(v => v.moveUp(0.1))
  }
  if (e.key === 'a') {
    // move left
    vectors3d.forEach(v => v.moveRight(0.1))
  }
  if (e.key === 'd') {
    // move right
    vectors3d.forEach(v => v.moveLeft(0.1))
  }
  if (e.key === 'e') {
    // move forward
    vectors3d.forEach(v => v.moveBack(0.1))
  }
  if (e.key === 'q') {
    // move backward
    vectors3d.forEach(v => v.moveForward(0.1))
  }
  if (e.key === 'r') {
    // rotate right
    vectors3d.forEach(v => v.rotateOY(0.1))
  }
  if (e.key === 'f') {
    // rotate left
    vectors3d.forEach(v => v.rotateOY(-0.1))
  }
  if (e.key === 'ArrowDown') {
    // rotate down
    vectors3d.forEach(v => v.rotateOX(0.1))
  }
  if (e.key === 'ArrowUp') {
    // rotate up
    vectors3d.forEach(v => v.rotateOX(-0.1))
  }
  if (e.key === 'ArrowLeft') {
    // rotate left
    vectors3d.forEach(v => v.rotateOZ(0.1))
  }
  if (e.key === 'ArrowRight') {
    // rotate right
    vectors3d.forEach(v => v.rotateOZ(-0.1))
  }
})

renderLoop(() => {
  const vectors2d = vectors3d.map(vector => vector.to2d(cameraPov))

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  vectors2d.forEach(vector => {
    ctx.beginPath()
    ctx.moveTo(canvas.width / 2 + vector.a.x, canvas.height / 2 - vector.a.y)
    ctx.lineTo(canvas.width / 2 + vector.b.x, canvas.height / 2 - vector.b.y)
    ctx.closePath()
    ctx.stroke()
  })
})
