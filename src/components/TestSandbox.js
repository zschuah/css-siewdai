import { makeStyles } from "@material-ui/core";
import kitten from "../assets/kitten.jpeg";
import styles from "./TestSandbox.module.css";

const useStyles = makeStyles({
  styledTextSandbox: {
    border: "2px solid green",
    textAlign: "center",
  },
});

const TestSandbox = () => {
  const classes = useStyles();

  return (
    <div className={classes.styledTextSandbox}>
      <h1>Test Sandbox</h1>
      <div className={styles.imgContainer}>
        <img className={styles.kittenImg} src={kitten} alt="kitten" />
      </div>
    </div>
  );
};

export default TestSandbox;
