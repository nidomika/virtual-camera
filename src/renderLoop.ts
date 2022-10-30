export function renderLoop(cb: () => void): void {
  function render() {
    cb()
    requestAnimationFrame(render)
  }

  render()
}
