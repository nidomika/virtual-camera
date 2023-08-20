import Point2d from './point2d'
import Point3d from './point3d'
import Vector3d from './vector3d'
import Polygon from './polygon'
import paintersAlgorithm from './paintersAlgorithm'
import Vector2d from './vector2d'

export default class Scene {
  public c: HTMLCanvasElement
  public ctx: CanvasRenderingContext2D
  public cameraPov: number
  public polygons: Polygon[]
  public vectors: Vector3d[]

  constructor(canvasId: string, figures: any[]) {
    this.c = document.getElementById(canvasId) as HTMLCanvasElement
    this.ctx = this.c.getContext('2d')!

    this.cameraPov = 200

    this.polygons = figures.reduce((polygons, figure) => {
      return polygons.concat(figure.polygons)
    }, [] as Polygon[])

    this.vectors = this.polygons.reduce((vectors, polygon) => {
      return vectors.concat(polygon.vectors)
    }, [] as Vector3d[])
  }

  pointTo2D(point: Point3d) {
    let x = (point.x * this.cameraPov) / point.z
    let y = (point.y * this.cameraPov) / point.z

    return new Point2d(x, y)
  }

  makeProjection() {
    let polygons: Polygon[] = []

    this.polygons.forEach(polygon => {
      let vectors2D: Vector3d[] = []

      polygon.vectors.forEach(v3d => {
        if (this.isOutOfCamera(v3d.a) || this.isOutOfCamera(v3d.b)) {
          return
        }

        vectors2D.push(
          new Vector2d(this.pointTo2D(v3d.a), this.pointTo2D(v3d.b))
        )
      })

      polygons.push(new Polygon(vectors2D, polygon.color))
    })

    return polygons
  }

  isOutOfCamera(point: Point3d) {
    return point.z <= 0
  }

  runPaintersAlgorithm() {
    this.polygons.sort(paintersAlgorithm)
  }

  draw() {
    this.runPaintersAlgorithm()
    let polygons = this.makeProjection()

    this.ctx.clearRect(0, 0, this.c.width, this.c.height)

    polygons.forEach(polygon => {
      let [first, ...tail] = polygon.points
      if (!first) return

      this.ctx.fillStyle = polygon.color
      this.ctx.beginPath()

      this.ctx.moveTo(this.c.width / 2 + first.x, this.c.height / 2 - first.y)
      tail.forEach(tail => {
        this.ctx.lineTo(this.c.width / 2 + tail.x, this.c.height / 2 - tail.y)
      })

      this.ctx.closePath()
      this.ctx.fill()
    })
  }
}
