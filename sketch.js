const sketch = document.querySelector(".sketch");
let N = 100;
let pixel = 500 / N;
sketch.style.width = `500px`;
for (let x = 0; x < N * N; x++) {
  const div = document.createElement("div");
  div.style.width = `${pixel}px`;
  div.style.height = `${pixel}px`;
  sketch.append(div);
}

sketch.addEventListener("mouseover", changeColor);

function changeColor(e) {
  e.stopPropagation();
  e.target.style.backgroundColor = randomColor();
}

function randomColor() {
  return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
    Math.random() * 256
  )},${Math.floor(Math.random() * 256)})`;
}
