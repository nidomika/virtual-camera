import Point3d from './point3d'
import Vector from './vector'

function cubeVertices(
  point: Point3d,
  width: number,
  height: number,
  depth: number
): Point3d[] {
  const { x, y, z } = point

  return [
    new Point3d(x, y, z), // lewy dolny przedni
    new Point3d(x + width, y, z), // prawy dolny przedni
    new Point3d(x, y + height, z), // lewy górny przedni
    new Point3d(x + width, y + height, z), // prawy górny przedni
    new Point3d(x, y, z + depth), // lewy dolny tylni
    new Point3d(x + width, y, z + depth), // prawy dolny tylni
    new Point3d(x, y + height, z + depth), // lewy górny tylni
    new Point3d(x + width, y + height, z + depth), // prawy górny tylni
  ]
}

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
  cubeVertexesToFaces(cubeVertices(new Point3d(5, -5, 10), 3, 3, 3)),
  cubeVertexesToFaces(cubeVertices(new Point3d(-2, -5, 10), 3, 2, 2)),
  cubeVertexesToFaces(cubeVertices(new Point3d(6, -5, 15), 5, 10, 5)),
  cubeVertexesToFaces(cubeVertices(new Point3d(-5, -5, 15), 5, 5, 5)),
  cubeVertexesToFaces(cubeVertices(new Point3d(-10, -5, 25), 25, 10, 10)),
]
