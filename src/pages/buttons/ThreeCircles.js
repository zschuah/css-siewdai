import { makeStyles } from "@material-ui/core";
import { displayProps } from "common/commonProps";
import styles from "./ThreeCircles.module.css";

const useStyles = makeStyles(displayProps);

const ThreeCircles = () => {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.displayTitle}>Three Circles</h1>

      <div className={`${classes.displayMain} ${classes.bgDark}`}>
        <button className={styles.btn}>
          <span className={styles.btnSpan}></span>
          <span>hover me</span>
        </button>
      </div>

      <div className={classes.codeBox}>
        <pre>
          <code className={classes.codeCard}>
            {`
.btn {
  cursor: pointer;
  width: 220px;
  height: 80px;
  color: #ff0;
  background: none;
  font-size: 26px;
  text-transform: uppercase;
  transition: all 0.5s;
  position: relative;
  /* Invisible border */
  border: none;
  /* IMPORTANT to raise button */
  z-index: 10;
}

.btn::before,
.btn::after {
  content: "";
  position: absolute;
  /* Positioning only the top */
  top: 50%;
  width: 20px;
  height: 20px;
  background: #ff0;
  border-radius: 50%;
  /* Center dots properly */
  transform: translateY(-50%);
  transition: all 0.3s;
  /* Put dots behind text */
  z-index: -1;
  opacity: 0;
}
.btn::before {
  left: 0;
  /* Horizontal distance */
  /* Vertical distance */
  /* Blur, color */
  box-shadow: -100px 0 0 #ff0;
}
.btn::after {
  right: 0;
  box-shadow: 100px 0 0 #ff0;
}
            `}
          </code>
        </pre>
        <pre>
          <code className={classes.codeCard}>
            {`
.btn:hover::before {
  /* Shadow will move with dot */
  left: 50%;
  box-shadow: 30px 0 0 #ff0;
  /* Center dot properly */
  /* Maintain vertical positioning */
  /* Both dots will overlap */
  transform: translateX(-50%)
  translateY(-50%);
  opacity: 1;
}
.btn:hover::after {
  right: 50%;
  box-shadow: -30px 0 0 #ff0;
  transform: translateX(50%)
  translateY(-50%);
  opacity: 1;
}

.btnSpan {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ff0;
  border-radius: 8px;
  transform: scale(0);
  transition: all 0.3s;
  /* Put yellow box behind text */
  z-index: -1;
}
.btn:hover .btnSpan {
  transform: scale(1);
  /* After dots finish moving */
  transition-delay: 0.4s;
}
.btn:hover {
  color: #262626;
  transition-delay: 0.4s;
}
            `}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default ThreeCircles;
