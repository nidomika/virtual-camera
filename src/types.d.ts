type Vertex2d = {
  x: number
  y: number
}

type Vertex3d = {
  x: number
  y: number
  z: number
}

type Vector = {
  a: Vertex2d | Vertex3d
  b: Vertex2d | Vertex3d
}

type Face = [Vector, Vector, Vector, Vector]
type Cuboid = [Face, Face, Face, Face, Face, Face]

type Camera = {
  x: number
  y: number
  z: number
  rotationX: number
  rotationY: number
  rotationZ: number
  pov: number
}
