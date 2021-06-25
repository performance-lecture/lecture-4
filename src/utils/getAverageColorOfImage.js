const cache = {};

export function getAverageColorOfImage(imgElement) {
  if (cache.hasOwnProperty(imgElement.src)) {
    return cache[imgElement.src];
  }

  const canvas = document.createElement('canvas');
  const context = canvas.getContext && canvas.getContext('2d');
  const averageColor = {
    r: 0,
    g: 0,
    b: 0,
  };

  if (!context) {
    return averageColor;
  }

  const width =
    imgElement.naturalWidth || imgElement.offsetWidth || imgElement.width;
  const height =
    imgElement.naturalHeight || imgElement.offsetHeight || imgElement.height;

  canvas.width = width / 3;
  canvas.height = height / 3;

  context.drawImage(imgElement, 0, 0, canvas.width, canvas.height);

  const imageData = context.getImageData(
    0,
    0,
    canvas.width,
    canvas.height
  ).data;
  const length = imageData.length;

  for (let i = 0; i < length; i += 40) {
    averageColor.r += imageData[i];
    averageColor.g += imageData[i + 1];
    averageColor.b += imageData[i + 2];
  }

  const count = length / 40;
  averageColor.r = ~~(averageColor.r / count); // ~~ => convert to int
  averageColor.g = ~~(averageColor.g / count);
  averageColor.b = ~~(averageColor.b / count);

  cache[imgElement.src] = averageColor;

  return averageColor;
}
