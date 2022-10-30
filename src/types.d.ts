type Vertex2d = {
  x: number
  y: number
}

type Vertex3d = {
  x: number
  y: number
  z: number
}

type Face = [Vertex3d, Vertex3d, Vertex3d, Vertex3d]
type Cube = [Face, Face, Face, Face, Face, Face]

type Camera = Vertex3d & {
  x: number
  y: number
  z: number
  rotationX: number
  rotationY: number
  rotationZ: number
  pov: number
}
