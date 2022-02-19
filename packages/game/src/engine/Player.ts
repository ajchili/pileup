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
}
