import Point3d from './point3d'
export default class Vector {
  public a: Point3d
  public b: Point3d

  constructor(a: Point3d, b: Point3d) {
    this.a = a
    this.b = b
  }

  moveUp(step: number) {
    this.a.y += step
    this.b.y += step
  }

  moveDown(step: number) {
    this.a.y -= step
    this.b.y -= step
  }

  moveLeft(step: number) {
    this.a.x -= step
    this.b.x -= step
  }

  moveRight(step: number) {
    this.a.x += step
    this.b.x += step
  }

  moveForward(step: number) {
    this.a.z += step
    this.b.z += step
  }

  moveBack(step: number) {
    this.a.z -= step
    this.b.z -= step
  }

  rotateOX(angle: number) {
    this.a.rotateOX(angle)
    this.b.rotateOX(angle)
  }

  rotateOY(angle: number) {
    this.a.rotateOY(angle)
    this.b.rotateOY(angle)
  }

  rotateOZ(angle: number) {
    this.a.rotateOZ(angle)
    this.b.rotateOZ(angle)
  }

  to2d(pov: number) {
    return { a: this.a.to2d(pov), b: this.b.to2d(pov) } as const
  }
}
