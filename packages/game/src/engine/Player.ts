import ControllableGameObject from "./ControllableGameObject";

export default class Player extends ControllableGameObject {
  update(): void {
    // TODO: Fix this speed stuff 😞
    if (!this.keys.has("w")) {
      this.speed = Math.max(0, this.speed + 0.25);
    }
    if (!this.keys.has("s")) {
      this.speed = Math.min(0, this.speed - 0.25);
    }

    for (const key of this.keys.values()) {
      switch (key) {
        case "w":
          this.speed = Math.min(-2, (this.speed -= 0.35));
          break;
        case "s":
          this.speed = Math.max(2, (this.speed += 0.25));
          break;
        case "a":
          this.rotation -= 10;
          if (this.rotation < 0) {
            this.rotation += 360;
          }
          break;
        case "d":
          this.rotation += 10;
          if (this.rotation > 360) {
            this.rotation -= 360;
          }
          break;
      }
    }
    this.position[0] += this.xSpeed;
    this.position[1] += this.ySpeed;
  }
}
