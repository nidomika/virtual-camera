import Point2d from './point2d'

export default class Vector2d {
  public a: Point2d
  public b: Point2d

  constructor(a: Point2d, b: Point2d) {
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
}
