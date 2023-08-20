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
    vectors3d.forEach(v => v.moveDown(0.05))
  }
  if (e.key === 's') {
    // move down
    vectors3d.forEach(v => v.moveUp(0.05))
  }
  if (e.key === 'a') {
    // move left
    vectors3d.forEach(v => v.moveRight(0.05))
  }
  if (e.key === 'd') {
    // move right
    vectors3d.forEach(v => v.moveLeft(0.05))
  }
  if (e.key === 'e') {
    // move forward
    vectors3d.forEach(v => v.moveBack(0.05))
  }
  if (e.key === 'q') {
    // move backward
    vectors3d.forEach(v => v.moveForward(0.05))
  }
  if (e.key === 'r') {
    // rotate right
    vectors3d.forEach(v => v.rotateOY(0.01))
  }
  if (e.key === 'f') {
    // rotate left
    vectors3d.forEach(v => v.rotateOY(-0.01))
  }
  if (e.key === 'ArrowDown') {
    // rotate down
    vectors3d.forEach(v => v.rotateOX(0.05))
  }
  if (e.key === 'ArrowUp') {
    // rotate up
    vectors3d.forEach(v => v.rotateOX(-0.05))
  }
  if (e.key === 'ArrowLeft') {
    // rotate left
    vectors3d.forEach(v => v.rotateOZ(0.05))
  }
  if (e.key === 'ArrowRight') {
    // rotate right
    vectors3d.forEach(v => v.rotateOZ(-0.05))
  }

  if (e.key === 'z') {
    // zoom in
    if (cameraPov < 15) return
    cameraPov -= 10
  }
  if (e.key === 'x') {
    // zoom out
    cameraPov += 10
  }
})

let isMousePressed = false
let lastMouseX = 0
let lastMouseY = 0

window.addEventListener('mousedown', e => {
  isMousePressed = true
  lastMouseX = e.clientX
  lastMouseY = e.clientY
})

window.addEventListener('mouseup', () => {
  isMousePressed = false
})

window.addEventListener('mousemove', e => {
  if (isMousePressed) {
    const deltaX = e.clientX - lastMouseX
    const deltaY = e.clientY - lastMouseY

    const moveSpeed = 0.001
    const rotateSpeed = 0.001

    // Modyfikuj swoje operacje na wektorach zgodnie z ruchem myszy
    if (deltaY > 0) {
      vectors3d.forEach(v => v.moveDown(moveSpeed))
    } else if (deltaY < 0) {
      vectors3d.forEach(v => v.moveUp(moveSpeed))
    }

    if (deltaX > 0) {
      vectors3d.forEach(v => v.moveRight(moveSpeed))
    } else if (deltaX < 0) {
      vectors3d.forEach(v => v.moveLeft(moveSpeed))
    }

    // Obrót w osiach X i Y
    vectors3d.forEach(v => {
      v.rotateOY(deltaX * rotateSpeed)
      v.rotateOX(-deltaY * rotateSpeed)
    })

    lastMouseX = e.clientX
    lastMouseY = e.clientY
  }
})

window.addEventListener('wheel', e => {
  const zoomSpeed = 5

  if (e.deltaY < 0) {
    // Zoom in
    if (cameraPov >= 15) {
      cameraPov -= zoomSpeed
    }
  } else if (e.deltaY > 0) {
    // Zoom out
    cameraPov += zoomSpeed
  }
})

renderLoop(() => {
  const vectors2d = vectors3d.map(vector => vector.to2d(cameraPov))

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  vectors2d.forEach(vector => {
    ctx.beginPath()
    if (vector.a && vector.b) {
      ctx.moveTo(canvas.width / 2 + vector.a.x, canvas.height / 2 - vector.a.y)
      ctx.lineTo(canvas.width / 2 + vector.b.x, canvas.height / 2 - vector.b.y)
    }
    ctx.closePath()
    ctx.stroke()
  })
})
