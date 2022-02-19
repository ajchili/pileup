import GameObject from "./GameObject";
import Player from "./Player";

export default class Game {
  private canvasContext: CanvasRenderingContext2D;
  private objectMap: Map<string, GameObject> = new Map();

  constructor(canvas: HTMLCanvasElement) {
    const context = canvas.getContext("2d");
    if (context === null) {
      throw new Error("Unable to initialize canvas context!");
    }
    this.canvasContext = context;
    this.objectMap.set("player", new Player({ position: [200, 200] }));

    // TODO: Make this better, loops should be not here
    setInterval(() => this.render(), 1000 / 60);
    setInterval(() => this.update(), 1000 / 30);
  }

  render(): void {
    this.canvasContext.clearRect(0, 0, 400, 400);
    for (let [key, object] of this.objectMap.entries()) {
      // TODO: 📝 Determine a method for render order
      object.render(this.canvasContext);
    }
  }

  update(): void {
    for (let [key, object] of this.objectMap.entries()) {
      // TODO: 📝 Determine a method for render order
      object.update();
    }
  }
}
