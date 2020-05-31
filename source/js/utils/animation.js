export function animateDuration(render, duration) {
  let id = 0;

  const promise = new Promise((resolve) => {
    let start = Date.now();
    (function tick() {
      let p = Date.now() - start;
      if (p > duration) {
        render(duration);
        resolve();
      } else {
        id = requestAnimationFrame(tick);
        render(p);
      }
    })();
  });

  promise.cancel = () => cancelAnimationFrame(id);

  return promise;
}
