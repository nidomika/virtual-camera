import { renderLoop } from './renderLoop'
import { cubes } from './cubes'
import './style.css'
// import Point3d from './point3d'
// import Vector from './vector'

const canvas = document.querySelector<HTMLCanvasElement>('#canvas')!
const ctx = canvas.getContext('2d')!
ctx.canvas.width = window.innerWidth
ctx.canvas.height = window.innerHeight
ctx.fillStyle = 'red'

let cameraPov = 160
const vectors3d = cubes.flatMap(cube => cube.flatMap(face => face))
// const cameraPoint = new Point3d(0, 0, 0)

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

const colors = [
  '#EC9DED',
  '#C880B7',
  '#E396E0',
  '#F1B5EB',
  '#EFA9EC',
  '#DA8FD2'
]

// function calculateNormalVector(
//   point1: Point3d,
//   point2: Point3d,
//   point3: Point3d
// ): Vector {
//   const vector1 = new Vector(point1, point2)
//   const vector2 = new Vector(point1, point3)
//   return vector1.crossProduct(vector2) // Tutaj używamy funkcji crossProduct do obliczenia iloczynu wektorowego
// }

// function calculateCenter(
//   point1: Point3d,
//   point2: Point3d,
//   point3: Point3d
// ): Point3d {
//   const centerX = (point1.x + point2.x + point3.x) / 3
//   const centerY = (point1.y + point2.y + point3.y) / 3
//   const centerZ = (point1.z + point2.z + point3.z) / 3
//   return new Point3d(centerX, centerY, centerZ)
// }

renderLoop(() => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  let facesWithDepth: { vectors: any[]; z: number; color: string }[] = []

  cubes.forEach(cube => {
    cube.forEach((face, i) => {
      const vectors2d = face.map(vector => vector.to2d(cameraPov))

      const z =
        face.flatMap(x => [x.a, x.b]).reduce((acc, curr) => acc + curr.z, 0) / 4

      facesWithDepth.push({
        vectors: vectors2d,
        z: z,
        color: colors[i]
      })
    })
  })

  facesWithDepth.sort((a, b) => b.z - a.z)

  facesWithDepth
    .filter(face => face.vectors.every(vector => vector.a && vector.b))
    .forEach(faceData => {
      const vectors2d = faceData.vectors

      ctx.fillStyle = faceData.color
      ctx.beginPath()

      ctx.moveTo(
        canvas.width / 2 + vectors2d[0].a.x,
        canvas.height / 2 - vectors2d[0].a.y
      )

      vectors2d.forEach(vector => {
        ctx.lineTo(
          canvas.width / 2 + vector.b.x,
          canvas.height / 2 - vector.b.y
        )
      })

      ctx.closePath()

      ctx.fill()
      ctx.stroke()
    })
})

// renderLoop(() => {
//   const vectors2d = vectors3d.map(vector => vector.to2d(cameraPov))

//   ctx.clearRect(0, 0, canvas.width, canvas.height)

//   vectors2d.forEach(vector => {
//     ctx.beginPath()
//     if (vector.a && vector.b) {
//       ctx.moveTo(canvas.width / 2 + vector.a.x, canvas.height / 2 - vector.a.y)
//       ctx.lineTo(canvas.width / 2 + vector.b.x, canvas.height / 2 - vector.b.y)
//     }
//     ctx.closePath()
//     ctx.stroke()
//   })
// })
