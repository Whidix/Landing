const sketch = document.querySelector(".sketch");
const numPixel = document.querySelector("#pixel");
const resetButton = document.querySelector("#reset");

numPixel.value = 100;
createArea();

sketch.addEventListener("mouseover", changeColor);
numPixel.addEventListener("change", createArea);
resetButton.addEventListener("click", createArea);

function createArea(e) {
  reset();
  if (numPixel.value > 100) {
    numPixel.value = 100;
  }
  const N = numPixel.value;
  const pixel = 500 / N;
  for (let x = 0; x < N * N; x++) {
    const div = document.createElement("div");
    div.style.width = `${pixel}px`;
    div.style.height = `${pixel}px`;
    sketch.append(div);
  }
}

function changeColor(e) {
  e.stopPropagation();
  if (e.target.className === "sketch") {
    return;
  }
  e.target.style.backgroundColor = randomColor();
}

function randomColor() {
  return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
    Math.random() * 256
  )},${Math.floor(Math.random() * 256)})`;
}

function reset() {
  sketch.innerHTML = "";
}
