import { makeStyles } from "@material-ui/core";
import { displayProps } from "common/commonProps";
import styles from "./ButtonHover.module.css";

const useStyles = makeStyles(displayProps);

const ButtonHover = () => {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.displayTitle}>Button Hover</h1>

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
  padding: 40px 80px;
  color: #262626;
  font-size: 45px;
  letter-spacing: 2px;
  border: 4px solid #262626;
  position: relative;
  transition: all 0.5s;
}
              `}
          </code>
        </pre>
        <pre>
          <code className={classes.codeCard}>
            {`
.btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #262626;
  transition: all 0.5s;
  transform: rotateX(90deg);
  /* Puts background BEHIND text */
  z-index: -1;
}
.btn:hover::before {
  transform: rotateX(0deg);
}
.btn:hover {
  color: white;
}
              `}
          </code>
        </pre>
        <pre>
          <code className={classes.codeCard}>
            {`
.btn::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #262626;
  transition: all 0.5s;
  transform: rotateY(90deg);
  /* Puts background BEHIND text */
  z-index: -1;
}
.btn:hover::after {
  transform: rotateY(0deg);
}
              `}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default ButtonHover;
