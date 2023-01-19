const canvas = document.getElementById("main-scene");
const context = canvas.getContext("2d");

const cursor = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

const bg = 'rgba(0, 0, 0, 0.5)'

addEventListener("mousemove", (e) => {
  cursor.x = e.clientX;
  cursor.y = e.clientY;
});

addEventListener("resize", () => setSize());

function setSize() {
  canvas.height = innerHeight;
  canvas.width = innerWidth;
}

context.globalAlpha = 0.5;

class Triangle {
  triangleSize = 0

  initialTriangleSize = 0

  offsetX = 0

  offsetY = 0

  left = {}

  top = {}

  right = {}

  fill = bg

  constructor(triangleSize, offsetX = 0, offsetY = 0) {
    this.initialTriangleSize = triangleSize
    this.triangleSize = triangleSize
    this.offsetX = offsetX
    this.offsetY = offsetY
  }

  isIntersecting(coord) {
    if (coord.x > this.left.x && coord.x < this.right.x && coord.y > this.top.y && coord.y < this.left.y) {
      return true
    }

    return false
  }

  draw() {
    const start = {
      x: (innerWidth / 2) - (this.triangleSize / 2) + this.offsetX,
      y: (innerHeight / 2) + (this.triangleSize / 2) + this.offsetY
    }

    this.left = { ...start }
    this.top = {
      x: start.x + (this.triangleSize / 2),
      y: start.y - (this.triangleSize)
    }
    this.right = {
      x: start.x + (this.triangleSize),
      y: start.y
    }

    context.beginPath()
    context.lineWidth = 4
    context.strokeStyle = '#FFFFFF'
    context.fillStyle = this.fill
    context.moveTo(this.left.x, this.left.y)
    context.lineTo(this.top.x, this.top.y)
    context.lineTo(this.right.x, this.right.y)
    context.lineTo(this.left.x, this.left.y)
    context.fill()

    context.stroke()
  }

  highlight() {
    if (this.triangleSize > this.initialTriangleSize + 30) {
      return
    }

      this.triangleSize += 1
      this.fill = `rgba(255, 255, 255, ${(this.triangleSize - this.initialTriangleSize) / 30})`
      this.draw()
  }

  restore() {
    if (this.triangleSize === this.initialTriangleSize) {
      return
    }

    this.triangleSize -= 1
    this.fill = `rgba(0, 0, 0, ${30 / (this.triangleSize - this.initialTriangleSize)})`
    this.draw()
  }
}

class Cursor {
  radius = 0

  initialRadius = 0

  stroke = '#FFFFFF'

  constructor(radius = 0) {
    this.radius = radius
    this.initialRadius = radius
  }

  draw() {
    context.beginPath()
    context.lineWidth = 2
    context.strokeStyle = this.stroke
    context.arc(cursor.x, cursor.y, this.radius, 0, Math.PI * 2, true)
    context.stroke()
  }

  highlight() {
    if (this.radius > this.initialRadius + 5) {
      return
    }

    this.radius += 0.3
    this.stroke = `rgba(0, 0, 0, ${(this.radius - this.initialRadius) / 5})`
    this.draw()
  }

  restore() {
    if (this.radius === this.initialRadius) {
      return
    }

    this.radius -= 0.3
    this.stroke = `rgba(255, 255, 255, ${5 / (this.radius - this.initialRadius)})`
    this.draw()
  }
}

let shouldAnimate = false
let progress = 0

const size = 100
const genesis = new Triangle(size)
const pointer = new Cursor(10)
let leftChild
let rightChild

setTimeout(() => {
  shouldAnimate = true
}, 2000)

function anim() {
  requestAnimationFrame(anim);

  context.fillStyle = bg;
  context.fillRect(0, 0, canvas.width, canvas.height);

  genesis.draw()
  pointer.draw()

  if (genesis.isIntersecting(cursor)) {
    genesis.highlight()
    pointer.highlight()
  } else {
    genesis.restore()
    pointer.restore()
  }

  if (shouldAnimate) {
    if (progress < size) {
      progress += 0.5
      leftChild = new Triangle(size, progress)
      rightChild = new Triangle(size, -progress)

      leftChild.draw()
      rightChild.draw()
    }
  }

  if (progress === size) {
    leftChild.draw()
    rightChild.draw()
  }
}

setSize();
anim();
