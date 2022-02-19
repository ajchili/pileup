import { createUseStyles } from "react-jss";
import Canvas from "./Canvas";

const styles = createUseStyles({
  container: {
    padding: 0,
    margin: 0,
    width: "100%",
    height: "100vh",
  },
});

export default (): JSX.Element => {
  const classes = styles();
  return (
    <div className={classes.container}>
      <Canvas />
    </div>
  );
};
