import Point3d from './point3d'
import Vector from './vector'

function cubeVertexesToFaces(vertexes: Point3d[]) {
  return [
    [
      new Vector(vertexes[0], vertexes[1]),
      new Vector(vertexes[1], vertexes[3]),
      new Vector(vertexes[3], vertexes[2]),
      new Vector(vertexes[2], vertexes[0]),
    ],
    [
      new Vector(vertexes[4], vertexes[5]),
      new Vector(vertexes[5], vertexes[7]),
      new Vector(vertexes[7], vertexes[6]),
      new Vector(vertexes[6], vertexes[4]),
    ],
    [
      new Vector(vertexes[0], vertexes[4]),
      new Vector(vertexes[4], vertexes[6]),
      new Vector(vertexes[6], vertexes[2]),
      new Vector(vertexes[2], vertexes[0]),
    ],
    [
      new Vector(vertexes[1], vertexes[5]),
      new Vector(vertexes[5], vertexes[7]),
      new Vector(vertexes[7], vertexes[3]),
      new Vector(vertexes[3], vertexes[1]),
    ],
    [
      new Vector(vertexes[0], vertexes[1]),
      new Vector(vertexes[1], vertexes[5]),
      new Vector(vertexes[5], vertexes[4]),
      new Vector(vertexes[4], vertexes[0]),
    ],
    [
      new Vector(vertexes[2], vertexes[3]),
      new Vector(vertexes[3], vertexes[7]),
      new Vector(vertexes[7], vertexes[6]),
      new Vector(vertexes[6], vertexes[2]),
    ],
  ]
}

export const cubes = [
  cubeVertexesToFaces([
    new Point3d(3, 2, -2),
    new Point3d(3, 0, -2),
    new Point3d(3, 2, 0),
    new Point3d(3, 0, 0),
    new Point3d(1, 2, -2),
    new Point3d(1, 0, -2),
    new Point3d(1, 2, 0),
    new Point3d(1, 0, 0),
  ]),
  cubeVertexesToFaces([
    new Point3d(-1, 2, -1),
    new Point3d(-1, 0, -1),
    new Point3d(-1, 2, 0),
    new Point3d(-1, 0, 0),
    new Point3d(-2, 2, -1),
    new Point3d(-2, 0, -1),
    new Point3d(-2, 2, 0),
    new Point3d(-2, 0, 0),
  ]),
  cubeVertexesToFaces([
    new Point3d(-1, 1, -5),
    new Point3d(-1, 0, -5),
    new Point3d(-1, 1, -2),
    new Point3d(-1, 0, -2),
    new Point3d(-2, 1, -5),
    new Point3d(-2, 0, -5),
    new Point3d(-2, 1, -2),
    new Point3d(-2, 0, -2),
  ]),
  cubeVertexesToFaces([
    new Point3d(3, 2, -5),
    new Point3d(3, 0, -5),
    new Point3d(3, 2, -3),
    new Point3d(3, 0, -3),
    new Point3d(1, 2, -5),
    new Point3d(1, 0, -5),
    new Point3d(1, 2, -3),
    new Point3d(1, 0, -3),
  ]),
  cubeVertexesToFaces([
    new Point3d(3, 3, -8),
    new Point3d(3, 0, -8),
    new Point3d(3, 3, -6),
    new Point3d(3, 0, -6),
    new Point3d(1, 3, -8),
    new Point3d(1, 0, -8),
    new Point3d(1, 3, -6),
    new Point3d(1, 0, -6),
  ]),
]
