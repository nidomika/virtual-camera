export function rotateMatrix(angle: number, axis: Axis) {
  const sin = Math.sin(angle)
  const cos = Math.cos(angle)
  switch (axis) {
    case 'x':
      return [1, 0, 0, 0, 0, cos, -sin, 0, 0, sin, cos, 0, 0, 0, 0, 1]
    case 'y':
      return [cos, 0, sin, 0, 0, 1, 0, 0, -sin, 0, cos, 0, 0, 0, 0, 1]
    case 'z':
      return [cos, -sin, 0, 0, sin, cos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
  }
}

export function multiplyMatrix(matrixA: Matrix, matrixB: Matrix) {
  const result = []
  for (let i = 0; i < matrixA.length; i++) {
    result[i] = []
    for (let j = 0; j < matrixB[0].length; j++) {
      let sum = 0
      for (let k = 0; k < matrixA[0].length; k++) {
        sum += matrixA[i][k] * matrixB[k][j]
      }
      // @ts-ignore
      result[i][j] = sum
    }
  }
  console.log(result)
  return result
}
