export function bindKeys(camera: Camera): void {
  window.addEventListener('keydown', e => {
    if (e.key === 'w') camera.y--
    if (e.key === 's') camera.y++
    if (e.key === 'a') camera.x--
    if (e.key === 'd') camera.x++
    if (e.key === 'e') camera.z--
    if (e.key === 'q') camera.z++
    if (e.key === 'r') camera.pov++
    if (e.key === 'f') camera.pov--
    if (e.key === 'ArrowDown') camera.rotationX--
    if (e.key === 'ArrowUp') camera.rotationX++
    if (e.key === 'ArrowLeft') camera.rotationX--
    if (e.key === 'ArrowRight') camera.rotationX++
  })
}
