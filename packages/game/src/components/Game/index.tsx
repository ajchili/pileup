import React, { useState, useRef } from "react";
import { createUseStyles } from "react-jss";
import Game from "../../engine/Game";

// This whole file is bad, make it better 😊

const styles = createUseStyles({
  container: {
    display: "flex",
    padding: 0,
    margin: 0,
    width: "100%",
    height: "100vh",
  },
  canvas: {},
});

export default (): JSX.Element | null => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const classes = styles();
  const [gameObjectInitialized, setGameObjectInitalized] = useState(false);

  const shouldCreateGame = (): boolean => {
    return !gameObjectInitialized && canvasRef.current !== null;
  };

  setTimeout(() => {
    if (shouldCreateGame()) {
      console.log("Creating game!");
      new Game(canvasRef.current!);
      setGameObjectInitalized(true);
    }
  }, 500);

  return (
    <div className={classes.container}>
      <canvas
        ref={canvasRef}
        className={classes.canvas}
        width="400"
        height="400"
      />
    </div>
  );
};
