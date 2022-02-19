import ControllableGameObject from "./ControllableGameObject";

export default class Player extends ControllableGameObject {
  decelerate(): void {
    if (!this.keys.has("w") && this.speed < 0) {
      this.speed = Math.min(0, this.speed + 0.1);
    }
    if (!this.keys.has("s") && this.speed > 0) {
      this.speed = Math.max(0, this.speed - 0.1);
    }
  }

  draw(context: CanvasRenderingContext2D): void {
    context.fillStyle = "#ff0000";
    context.fillRect(-10, -10, 4, 20);
    context.fillStyle = "#000000";
    context.fillRect(-6, -10, 16, 20);
  }
}
