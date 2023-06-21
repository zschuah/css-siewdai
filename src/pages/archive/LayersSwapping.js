import { makeStyles } from "@material-ui/core";
import { displayProps } from "common/commonProps";
import styles from "./LayersSwapping.module.css";

const useStyles = makeStyles(displayProps);

const LayersSwapping = () => {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.displayTitle}>Layers Swapping</h1>

      <div className={`${classes.displayMain} ${classes.bgGrey}`}>
        <button className={styles.btn}>button</button>
      </div>

      <div className={classes.codeBox}>
        <pre>
          <code className={classes.codeCard}>
            {`
.btn {
  cursor: pointer;
  background: transparent;
  padding: 20px 40px;
  text-transform: uppercase;
  letter-spacing: 4px;
  /* Main button is invisible */
  color: transparent;
  border: 3px solid #ff0;
  font-size: 30px;
  position: relative;
}

.btn::before {
  content: "button";
  position: absolute;
  top: 0;
  /* Init on default position */
  left: 0;
  width: 100%;
  height: 100%;
  background: #363636;
  color: #ff0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
}
.btn:hover::before {
  /* Final on right of button */
  left: 100%;
  transform: scale(0) rotateY(360deg);
  opacity: 0;
}
        `}
          </code>
        </pre>
        <pre>
          <code className={classes.codeCard}>{`
.btn::after {
  content: "button";
  position: absolute;
  top: 0;
  /* Init on left of button */
  left: -100%;
  width: 100%;
  height: 100%;
  background: #363636;
  color: #ff0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  transform: scale(0) rotateY(0);
  opacity: 0;
}
.btn:hover::after {
  /* Final on default position */
  left: 0;
  transform: scale(1) rotateY(360deg);
  opacity: 1;
}
        `}</code>
        </pre>
      </div>
    </div>
  );
};

export default LayersSwapping;
