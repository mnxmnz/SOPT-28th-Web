const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName('jsColor');
const range = document.getElementById('jsRange');
const mode = document.getElementById('jsMode');
const saveBtn = document.getElementById('jsSave');

const INITIAL_COLOR = '2c2c2c';
const CANVAS_SIZE = 500;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.55;

let painting = false;
let filling = false;

const startPainting = event => {
  painting = true;
};

const stopPainting = event => {
  painting = false;
};

const onMouseMove = event => {
  const x = event.offsetX;
  const y = event.offsetY;

  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
};

const handleleColorClick = event => {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
};

const handleleRangeChange = event => {
  const size = event.target.value;
  ctx.lineWidth = size;
};

const handleleModeClick = event => {
  if (filling === true) {
    filling = false;
    mode.innerText = 'Fill';
  } else {
    filling = true;
    mode.innerText = 'Paint';
  }
};

const handleleCanvasClick = () => {
  if (filling) {
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }
};

const handleleCM = event => {
  event.preventDefault();
};

const handleleSaveClick = () => {
  const image = canvas.toDataURL();
  const link = document.createElement('a');
  link.href = image;
  link.download = 'Paint[🎨]';
  link.click();
};

if (canvas) {
  canvas.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('mousedown', startPainting);
  canvas.addEventListener('mouseup', stopPainting);
  canvas.addEventListener('mouseleave', stopPainting);
  canvas.addEventListener('click', handleleCanvasClick);
  canvas.addEventListener('contextmenu', handleleCM);
}

Array.from(colors).forEach(color => color.addEventListener('click', handleleColorClick));

if (range) {
  range.addEventListener('input', handleleRangeChange);
}

if (mode) {
  mode.addEventListener('click', handleleModeClick);
}

if (saveBtn) {
  saveBtn.addEventListener('click', handleleSaveClick);
}
