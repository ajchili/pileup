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

  abstract draw(context: CanvasRenderingContext2D): void;

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

  protected get rotationInRadians(): number {
    return (this.rotation * Math.PI) / 180;
  }

  protected get xDirection(): number {
    return Math.cos(this.rotationInRadians);
  }

  protected get yDirection(): number {
    return Math.sin(this.rotationInRadians);
  }

  protected get xSpeed(): number {
    return this.speed * this.xDirection;
  }

  protected get ySpeed(): number {
    return this.speed * this.yDirection;
  }

  render(context: CanvasRenderingContext2D): void {
    context.translate(this.position[0], this.position[1]);
    context.rotate(this.rotationInRadians);

    this.draw(context);

    context.rotate(-this.rotationInRadians);
    context.translate(-this.position[0], -this.position[1]);
  }
}
