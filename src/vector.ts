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

  crossProduct(v: Vector) {
    const x = this.a.y * v.a.z - this.a.z * v.a.y
    const y = this.a.z * v.a.x - this.a.x * v.a.z
    const z = this.a.x * v.a.y - this.a.y * v.a.x

    return new Vector(new Point3d(x, y, z), new Point3d(0, 0, 0))
  }

  dotProduct(v: Vector) {
    return this.a.x * v.a.x + this.a.y * v.a.y + this.a.z * v.a.z
  }
}
