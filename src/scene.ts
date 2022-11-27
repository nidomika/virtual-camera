function cubeVertexesToFaces(vertexes: Vertex3d[]): Cuboid {
  return [
    [
      { a: vertexes[0], b: vertexes[1] },
      { a: vertexes[1], b: vertexes[2] },
      { a: vertexes[2], b: vertexes[3] },
      { a: vertexes[3], b: vertexes[0] },
    ],
    [
      { a: vertexes[4], b: vertexes[5] },
      { a: vertexes[5], b: vertexes[6] },
      { a: vertexes[6], b: vertexes[7] },
      { a: vertexes[7], b: vertexes[4] },
    ],
    [
      { a: vertexes[0], b: vertexes[2] },
      { a: vertexes[2], b: vertexes[4] },
      { a: vertexes[4], b: vertexes[6] },
      { a: vertexes[6], b: vertexes[0] },
    ],
    [
      { a: vertexes[1], b: vertexes[3] },
      { a: vertexes[3], b: vertexes[5] },
      { a: vertexes[5], b: vertexes[7] },
      { a: vertexes[7], b: vertexes[1] },
    ],
    [
      { a: vertexes[0], b: vertexes[1] },
      { a: vertexes[1], b: vertexes[4] },
      { a: vertexes[4], b: vertexes[5] },
      { a: vertexes[5], b: vertexes[0] },
    ],
    [
      { a: vertexes[2], b: vertexes[3] },
      { a: vertexes[3], b: vertexes[6] },
      { a: vertexes[6], b: vertexes[7] },
      { a: vertexes[7], b: vertexes[2] },
    ],
  ]
}

console.log(
  cubeVertexesToFaces([
    { x: 3, y: 2, z: -2 },
    { x: 3, y: 0, z: -2 },
    { x: 3, y: 2, z: 0 },
    { x: 3, y: 0, z: 0 },
    { x: 1, y: 2, z: -2 },
    { x: 1, y: 0, z: -2 },
    { x: 1, y: 2, z: 0 },
    { x: 1, y: 0, z: 0 },
  ])
)

export const cubes: Cuboid[] = [
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
