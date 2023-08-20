import Point3d from './point3d'
import Vector2d from './vector2d'

export default class Vector3d extends Vector2d {
  public a: Point3d
  public b: Point3d

  constructor(a: Point3d, b: Point3d) {
    super(a.to2d(0), b.to2d(0))
    this.a = a
    this.b = b
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
