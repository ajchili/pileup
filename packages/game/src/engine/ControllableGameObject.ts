import GameObject, { GameObjectProps } from "./GameObject";

interface ControllableGameObjectProps extends GameObjectProps {
  isControllable?: boolean;
  maxSpeed?: number;
}

export default abstract class ControllableGameObject extends GameObject {
  protected keys: Set<string> = new Set();
  private isControllable: boolean;
  protected maxSpeed: number;

  constructor(props: ControllableGameObjectProps = { position: [0, 0] }) {
    super(props);
    const { isControllable = true, maxSpeed = 2 } = props;

    this.isControllable = isControllable;
    this.maxSpeed = maxSpeed;

    document.addEventListener("keydown", (ev) => this.keydown(ev));
    document.addEventListener("keyup", (ev) => this.keyup(ev));
  }

  enableControls(): void {
    this.isControllable = true;
  }

  disableControls(): void {
    this.isControllable = false;
    this.keys.clear();
  }

  keydown(ev: KeyboardEvent): void {
    if (!this.isControllable) {
      return;
    }
    this.keys.add(ev.key);
  }

  keyup(ev: KeyboardEvent): void {
    if (!this.isControllable) {
      return;
    }
    this.keys.delete(ev.key);
  }

  update(): void {
    super.update();

    for (const key of this.keys.values()) {
      switch (key) {
        case "w":
          this.speed = Math.min(-this.maxSpeed, (this.speed -= 0.35));
          break;
        case "s":
          this.speed = Math.max(this.maxSpeed, (this.speed += 0.25));
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
