import Point3D from './point3d'
import Polygon from './polygon'
import Vector from './vector3d'

export default class Cube {
  public x: number
  public y: number
  public z: number
  public width: number
  public height: number
  public color: string
  public polygons: Polygon[]

  constructor(
    x: number,
    y: number,
    z: number,
    width: number,
    height: number,
    color: string
  ) {
    this.x = x
    this.y = y
    this.z = z
    this.width = width
    this.height = height
    this.color = color
    this.polygons = []

    this.createWalls()
  }

  createWalls() {
    this.createFrontWall()
    this.createBackWall()
    this.createBottomWall()
    this.createTopWall()
    this.createLeftWall()
    this.createRightWall()
  }

  createFrontWall() {
    let vectors = []

    vectors.push(
      new Vector(
        new Point3D(this.x, this.y, this.z),
        new Point3D(this.x + this.width, this.y, this.z)
      )
    )
    vectors.push(
      new Vector(
        new Point3D(this.x + this.width, this.y, this.z),
        new Point3D(this.x + this.width, this.y + this.height, this.z)
      )
    )
    vectors.push(
      new Vector(
        new Point3D(this.x + this.width, this.y + this.height, this.z),
        new Point3D(this.x, this.y + this.height, this.z)
      )
    )
    vectors.push(
      new Vector(
        new Point3D(this.x, this.y + this.height, this.z),
        new Point3D(this.x, this.y, this.z)
      )
    )

    this.polygons.push(new Polygon(vectors, this.color))
  }

  createBackWall() {
    let vectors = []

    vectors.push(
      new Vector(
        new Point3D(this.x, this.y, this.z + this.height),
        new Point3D(this.x + this.width, this.y, this.z + this.height)
      )
    )
    vectors.push(
      new Vector(
        new Point3D(this.x + this.width, this.y, this.z + this.height),
        new Point3D(
          this.x + this.width,
          this.y + this.height,
          this.z + this.height
        )
      )
    )
    vectors.push(
      new Vector(
        new Point3D(
          this.x + this.width,
          this.y + this.height,
          this.z + this.height
        ),
        new Point3D(this.x, this.y + this.height, this.z + this.height)
      )
    )
    vectors.push(
      new Vector(
        new Point3D(this.x, this.y + this.height, this.z + this.height),
        new Point3D(this.x, this.y, this.z + this.height)
      )
    )

    this.polygons.push(new Polygon(vectors, this.color))
  }

  createBottomWall() {
    let vectors = []

    vectors.push(
      new Vector(
        new Point3D(this.x, this.y, this.z),
        new Point3D(this.x, this.y, this.z + this.height)
      )
    )
    vectors.push(
      new Vector(
        new Point3D(this.x, this.y, this.z + this.height),
        new Point3D(this.x + this.width, this.y, this.z + this.height)
      )
    )
    vectors.push(
      new Vector(
        new Point3D(this.x + this.width, this.y, this.z + this.height),
        new Point3D(this.x + this.width, this.y, this.z)
      )
    )
    vectors.push(
      new Vector(
        new Point3D(this.x + this.width, this.y, this.z),
        new Point3D(this.x, this.y, this.z)
      )
    )

    this.polygons.push(new Polygon(vectors, this.color))
  }

  createTopWall() {
    let vectors = []

    vectors.push(
      new Vector(
        new Point3D(this.x, this.y + this.height, this.z),
        new Point3D(this.x, this.y + this.height, this.z + this.height)
      )
    )
    vectors.push(
      new Vector(
        new Point3D(this.x, this.y + this.height, this.z + this.height),
        new Point3D(
          this.x + this.width,
          this.y + this.height,
          this.z + this.height
        )
      )
    )
    vectors.push(
      new Vector(
        new Point3D(
          this.x + this.width,
          this.y + this.height,
          this.z + this.height
        ),
        new Point3D(this.x + this.width, this.y + this.height, this.z)
      )
    )
    vectors.push(
      new Vector(
        new Point3D(this.x + this.width, this.y + this.height, this.z),
        new Point3D(this.x, this.y + this.height, this.z)
      )
    )

    this.polygons.push(new Polygon(vectors, this.color))
  }

  createLeftWall() {
    let vectors = []

    vectors.push(
      new Vector(
        new Point3D(this.x, this.y, this.z),
        new Point3D(this.x, this.y, this.z + this.height)
      )
    )
    vectors.push(
      new Vector(
        new Point3D(this.x, this.y, this.z + this.height),
        new Point3D(this.x, this.y + this.height, this.z + this.height)
      )
    )
    vectors.push(
      new Vector(
        new Point3D(this.x, this.y + this.height, this.z + this.height),
        new Point3D(this.x, this.y + this.height, this.z)
      )
    )
    vectors.push(
      new Vector(
        new Point3D(this.x, this.y + this.height, this.z),
        new Point3D(this.x, this.y, this.z)
      )
    )

    this.polygons.push(new Polygon(vectors, this.color))
  }

  createRightWall() {
    let vectors = []

    vectors.push(
      new Vector(
        new Point3D(this.x + this.width, this.y, this.z),
        new Point3D(this.x + this.width, this.y, this.z + this.height)
      )
    )
    vectors.push(
      new Vector(
        new Point3D(this.x + this.width, this.y, this.z + this.height),
        new Point3D(
          this.x + this.width,
          this.y + this.height,
          this.z + this.height
        )
      )
    )
    vectors.push(
      new Vector(
        new Point3D(
          this.x + this.width,
          this.y + this.height,
          this.z + this.height
        ),
        new Point3D(this.x + this.width, this.y + this.height, this.z)
      )
    )
    vectors.push(
      new Vector(
        new Point3D(this.x + this.width, this.y + this.height, this.z),
        new Point3D(this.x + this.width, this.y, this.z)
      )
    )

    this.polygons.push(new Polygon(vectors, this.color))
  }
}
