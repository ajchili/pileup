export interface GameObjectProps {
  position: [number, number];
}

export default abstract class GameObject {
  protected position: [number, number];
  protected speed: number = 0;
  protected rotation: number = 0;

  constructor(props: GameObjectProps) {
    this.position = props.position;
  }

  abstract decelerate(): void;

  update(): void {
    this.decelerate();
  }

  protected get direction(): number {
    const direction = this.rotation / 90;
    if (direction <= 2) {
      return direction / 2;
    } else {
      return (-4 + direction) / 2;
    }
  }

  protected get xDirection(): number {
    return Math.cos((this.rotation * Math.PI) / 180);
  }

  protected get yDirection(): number {
    return Math.sin((this.rotation * Math.PI) / 180);
  }

  protected get xSpeed(): number {
    return this.speed * this.xDirection;
  }

  protected get ySpeed(): number {
    return this.speed * this.yDirection;
  }

  render(canvas: CanvasRenderingContext2D): void {
    // TODO: Figure out rotations in rendering
    canvas.fillRect(this.position[0] + 200, this.position[1] + 200, 20, 20);

    canvas.strokeStyle = "#ff0000";
    canvas.beginPath();
    canvas.moveTo(
      this.position[0] + 210 + this.xDirection * 10,
      this.position[1] + 210 + this.yDirection * 10
    );
    canvas.lineTo(this.position[0] + 210, this.position[1] + 210);
    canvas.stroke();
  }
}
