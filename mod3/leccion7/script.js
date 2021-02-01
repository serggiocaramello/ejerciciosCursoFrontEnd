const svgPlane = document.getElementById("svgPlane");
const up = document.getElementById("up");
const left = document.getElementById("left");
const down = document.getElementById("down");
const right = document.getElementById("right");
const sizeNormal = document.getElementById("sizeNormal");
const sizeIncrease = document.getElementById("sizeIncrease");
const sizeDecrease = document.getElementById("sizeDecrease");
const visible = document.getElementById("visible");
const invisible = document.getElementById("invisible");

class Ship {
  constructor(el) {
    this._el = el;
    this._positionY = el.offsetTop;
    this._positionX = el.offsetLeft;
    this._scale = 1;
  }

  rePositionY() {
    this._positionY = this._el.offsetTop;
  }
  rePositionX() {
    this._positionX = this._el.offsetLeft;
  }
  reScale() {
    this._el.style.transform = `scale(${this._scale})`;
  }
  moveUp() {
    this._el.style.top = `${this._positionY - 30}px`;
    this.rePositionY();
  }
  moveDown() {
    this._el.style.top = `${this._positionY + 30}px`;
    this.rePositionY();
  }
  moveLeft() {
    this._el.style.left = `${this._positionX - 30}px`;
    this.rePositionX();
  }
  moveRight() {
    this._el.style.left = `${this._positionX + 30}px`;
    this.rePositionX();
  }
  sizeNormal() {
    this._scale = 1;
    this.reScale();
  }
  sizeIncrease() {
    this._scale += 0.1;
    this.reScale();
  }
  sizeDecrease() {
    this._scale -= 0.1;
    this.reScale();
  }
  visible() {
    this._el.style.opacity = "1";
  }
  invisible() {
    this._el.style.opacity = "0";
  }
}

const plane = new Ship(svgPlane);

up.addEventListener("click", () => plane.moveUp());
down.addEventListener("click", () => plane.moveDown());
left.addEventListener("click", () => plane.moveLeft());
right.addEventListener("click", () => plane.moveRight());
sizeNormal.addEventListener("click", () => plane.sizeNormal());
sizeIncrease.addEventListener("click", () => plane.sizeIncrease());
sizeDecrease.addEventListener("click", () => plane.sizeDecrease());
visible.addEventListener("click", () => plane.visible());
invisible.addEventListener("click", () => plane.invisible());
