function cubeVertexesToFaces(vertexes: Vertex3d[]): Cube {
  return [
    [vertexes[0], vertexes[1], vertexes[2], vertexes[3]],
    [vertexes[4], vertexes[5], vertexes[6], vertexes[7]],
    [vertexes[0], vertexes[2], vertexes[4], vertexes[6]],
    [vertexes[1], vertexes[3], vertexes[5], vertexes[7]],
    [vertexes[0], vertexes[1], vertexes[4], vertexes[5]],
    [vertexes[2], vertexes[3], vertexes[6], vertexes[7]],
  ]
}

export const cubes: Cube[] = [
  cubeVertexesToFaces([
    { x: 3, y: 2, z: -2 },
    { x: 3, y: 0, z: -2 },
    { x: 3, y: 2, z: 0 },
    { x: 3, y: 0, z: 0 },
    { x: 1, y: 2, z: -2 },
    { x: 1, y: 0, z: -2 },
    { x: 1, y: 2, z: 0 },
    { x: 1, y: 0, z: 0 },
  ]),
  cubeVertexesToFaces([
    { x: -1, y: 2, z: -1 },
    { x: -1, y: 0, z: -1 },
    { x: -1, y: 2, z: 0 },
    { x: -1, y: 0, z: 0 },
    { x: -2, y: 2, z: -1 },
    { x: -2, y: 0, z: -1 },
    { x: -2, y: 2, z: 0 },
    { x: -2, y: 0, z: 0 },
  ]),
  cubeVertexesToFaces([
    { x: -1, y: 1, z: -5 },
    { x: -1, y: 0, z: -5 },
    { x: -1, y: 1, z: -2 },
    { x: -1, y: 0, z: -2 },
    { x: -2, y: 1, z: -5 },
    { x: -2, y: 0, z: -5 },
    { x: -2, y: 1, z: -2 },
    { x: -2, y: 0, z: -2 },
  ]),
  cubeVertexesToFaces([
    { x: 3, y: 2, z: -5 },
    { x: 3, y: 0, z: -5 },
    { x: 3, y: 2, z: -3 },
    { x: 3, y: 0, z: -3 },
    { x: 1, y: 2, z: -5 },
    { x: 1, y: 0, z: -5 },
    { x: 1, y: 2, z: -3 },
    { x: 1, y: 0, z: -3 },
  ]),
  cubeVertexesToFaces([
    { x: 3, y: 3, z: -8 },
    { x: 3, y: 0, z: -8 },
    { x: 3, y: 3, z: -6 },
    { x: 3, y: 0, z: -6 },
    { x: 1, y: 3, z: -8 },
    { x: 1, y: 0, z: -8 },
    { x: 1, y: 3, z: -6 },
    { x: 1, y: 0, z: -6 },
  ]),
]
