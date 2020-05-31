export function imageLoaded(src, alt = ``) {
  return new Promise((resolve) => {
    const image = document.createElement(`img`);

    image.setAttribute(`alt`, alt);
    image.setAttribute(`src`, src);

    image.addEventListener(`load`, () => resolve(image));
  });
}
