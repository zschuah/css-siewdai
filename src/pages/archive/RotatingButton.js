import { makeStyles } from "@material-ui/core";
import { displayProps } from "common/commonProps";
import styles from "./RotatingButton.module.css";

const useStyles = makeStyles(displayProps);

const RotatingButton = () => {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.displayTitle}>Rotating Button</h1>

      <div className={classes.displayMain}>
        <button className={styles.btn}>Hover Me</button>
      </div>

      <div className={classes.codeBox}>
        <pre>
          <code className={classes.codeCard}>
            {`
.btn {
  cursor: pointer;
  background: transparent;
  font-size: 45px;
  border: 5px solid black;
  padding: 40px 80px;
  position: relative;
  overflow: hidden;
}
        `}
          </code>
        </pre>
        <pre>
          <code className={classes.codeCard}>{`
.btn::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  background: yellow;
  height: 100%;
  width: 100%;
  z-index: -1;
  transform-origin: bottom left;
  transform: rotate(-90deg);
  transition: all 0.5s;
}
        `}</code>
        </pre>
        <pre>
          <code className={classes.codeCard}>{`
.btn:hover::before {
  transform: rotate(0deg);
}
        `}</code>
        </pre>
      </div>
    </div>
  );
};

export default RotatingButton;
