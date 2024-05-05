let video;
let pixelSize = 40;
let emojiImg; // 当前显示的 emoji 图片
let emojiImgs = []; // 存储所有 emoji 图片的数组
let drawEmoji = false;
let sizeControlButton; // 控制像素大小的按钮
let changeEmojiButton; // 更换 emoji 的按钮
let colorModeButton; // 控制颜色模式的按钮
let saveButton; // 用于保存画布的按钮
let colorModes = [
  { background: 'black', dot: 'white' },
  { background: '#6C4C98', dot: '#D8AF59' },
  { background: '#D9B523', dot: '#2E2C29' },
  { background: '#92C04A', dot: '#3A67A5' }
];
let currentColorModeIndex = 0; // 当前颜色模式的索引

function preload() {
  for (let i = 1; i <= 6; i++) {
    emojiImgs.push(loadImage(`emoji${i}.png`));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.size(width / pixelSize, height / pixelSize);
  video.hide();
  noStroke();

  // 添加事件监听器到 HTML 按钮
  document.getElementById('toggleButton').addEventListener('click', toggleDrawingMode);
  document.getElementById('increasePixelSizeButton').addEventListener('click', increasePixelSize);
  document.getElementById('changeEmojiButton').addEventListener('click', changeEmoji);
  document.getElementById('changeColorModeButton').addEventListener('click', changeColorMode);
  document.getElementById('saveImageButton').addEventListener('click', saveImage);

  emojiImg = emojiImgs[0];
}


function draw() {
  if (drawEmoji) {
    background(0); // Emoji 模式下保持黑色背景
  } else {
    let mode = colorModes[currentColorModeIndex];
    background(mode.background); // 设置背景颜色
  }

  video.loadPixels();
  for (let y = 0; y < video.height; y++) {
    for (let x = 0; x < video.width; x++) {
      const i = (y * video.width + x) * 4;
      const r = video.pixels[i + 0];
      const g = video.pixels[i + 1];
      const b = video.pixels[i + 2];

      let brightness = (r + g + b) / 3;
      let diameter = map(brightness, 0, 255, pixelSize * 0.8, pixelSize * 0.4);

      if (!drawEmoji) {
        let mode = colorModes[currentColorModeIndex];
        fill(mode.dot); // 设置椭圆颜色
        ellipse(x * pixelSize + pixelSize / 2, y * pixelSize + pixelSize / 2, diameter, diameter);
      } else {
        image(emojiImg, x * pixelSize, y * pixelSize, diameter, diameter);
      }
    }
  }
}

function toggleDrawingMode() {
  drawEmoji = !drawEmoji;
}

function increasePixelSize() {
  pixelSize += 20;
  if (pixelSize > 120) {
    pixelSize = 20;
  }
  video.size(width / pixelSize, height / pixelSize);
}

function changeEmoji() {
  let randomIndex = floor(random(emojiImgs.length));
  emojiImg = emojiImgs[randomIndex];
}

function changeColorMode() {
  currentColorModeIndex = (currentColorModeIndex + 1) % colorModes.length;
}

function saveImage() {
  saveCanvas('myCanvas', 'png'); // 保存画布内容为 PNG 文件
}
