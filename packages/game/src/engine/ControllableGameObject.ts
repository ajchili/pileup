import GameObject from "./GameObject";

export default abstract class ControllableGameObject extends GameObject {
  protected keys: Set<string> = new Set();

  constructor() {
    super();

    document.addEventListener("keydown", (ev) => this.keydown(ev));
    document.addEventListener("keyup", (ev) => this.keyup(ev));
  }

  keydown(ev: KeyboardEvent): void {
    this.keys.add(ev.key);
  }

  keyup(ev: KeyboardEvent): void {
    this.keys.delete(ev.key);
  }
}
