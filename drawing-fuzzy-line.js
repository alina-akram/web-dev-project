//Draw a Fuzzy Line
class DrawingFuzzyLine extends PaintFunction {
  constructor(contextReal) {
    super();
    this.context = contextReal;
  }

  onMouseDown(coord, event) {
    this.context.strokeStyle = "rgb(0, 0, 0)";
    this.context.lineJoin = this.context.lineCap = "round";
    this.context.shadowBlur = 15;
    this.context.lineWidth = 15;
    this.context.shadowColor = "rgb(0, 0, 0)";
    this.context.beginPath();
    this.context.moveTo(coord[0], coord[1]);
    this.draw(coord[0], coord[1]);
  }
  onDragging(coord, event) {
    this.draw(coord[0], coord[1]);
  }

  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave() {}
  onMouseEnter() {}

  draw(x, y) {
    this.context.lineTo(x, y);
    this.context.moveTo(x, y);
    this.context.closePath();
    this.context.stroke();
  }
}