import Point3d from './point3d'
import Vector3d from './vector3d'

export default class Polygon {
  public points: Point3d[]
  public vectors: Vector3d[]
  public color: string

  constructor(vectors: Vector3d[], color: string) {
    this.vectors = vectors
    this.color = color

    this.points = this.vectors.reduce((points: Point3d[], vector: Vector3d) => {
      points.push(vector.a)
      return points
    }, [])
  }

  distanceToObserver() {
    let avr = new Point3d(
      this.sumCoordinates('x') / this.points.length,
      this.sumCoordinates('y') / this.points.length,
      this.sumCoordinates('z') / this.points.length
    )

    return Math.sqrt(
      Math.pow(avr.x, 2) + Math.pow(avr.y, 2) + Math.pow(avr.z, 2)
    )
  }

  sumCoordinates(coordinate: Axis) {
    return this.points.reduce((sum, point) => {
      return (sum += point[coordinate])
    }, 0)
  }

  maxZ() {
    return Math.max(...this.points.map(p => p.z))
  }

  minZ() {
    return Math.min(...this.points.map(p => p.z))
  }
}
