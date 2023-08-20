import Point2d from './point2d'

export default class Point3d {
  public x: number
  public y: number
  public z: number
  public w: number

  constructor(x: number, y: number, z: number) {
    this.x = x
    this.y = y
    this.z = z
    this.w = 1.0
  }

  get matrix(): number[] {
    return [this.x, this.y, this.z, this.w]
  }

  set matrix(matrix: number[]) {
    this.x = matrix[0]
    this.y = matrix[1]
    this.z = matrix[2]
    this.w = matrix[3]
  }

  rotateOX(angle: number) {
    const sin = Math.sin(angle)
    const cos = Math.cos(angle)
    const matrix = this.matrix
    this.matrix = [
      matrix[0],
      matrix[1] * cos - matrix[2] * sin,
      matrix[1] * sin + matrix[2] * cos,
      matrix[3],
    ]
  }

  rotateOY(angle: number) {
    const sin = Math.sin(angle)
    const cos = Math.cos(angle)
    const matrix = this.matrix
    this.matrix = [
      matrix[0] * cos + matrix[2] * sin,
      matrix[1],
      -matrix[0] * sin + matrix[2] * cos,
      matrix[3],
    ]
  }

  rotateOZ(angle: number) {
    const sin = Math.sin(angle)
    const cos = Math.cos(angle)
    const matrix = this.matrix
    this.matrix = [
      matrix[0] * cos - matrix[1] * sin,
      matrix[0] * sin + matrix[1] * cos,
      matrix[2],
      matrix[3],
    ]
  }

  to2d(pov: number): Point2d | null {
    if (this.z <= 0) return null
    const projectedX = this.x / this.w
    const projectedY = this.y / this.w
    const x = (projectedX * pov) / this.z
    const y = (projectedY * pov) / this.z
    return new Point2d(x, y)
  }
}
