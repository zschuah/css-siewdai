import { makeStyles } from "@material-ui/core";
import { displayProps } from "common/commonProps";
import styles from "./SwipeButton.module.css";

const useStyles = makeStyles(displayProps);

const SwipeButton = () => {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.displayTitle}>Swipe Button</h1>

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
  color: #351435;
  font-size: 40px;
  border: 5px solid #351435;
  padding: 40px 80px;
  position: relative;
  /* TRANSITION FOR TEXT */
  transition: all 0.5s;
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
  height: 100%;
  width: 100%;
  background: #351435;
  z-index: -1;
  transform: translateX(-100%);
  /* TRANSITION FOR BACKGROUND */
  transition: all 0.5s;
}
        `}</code>
        </pre>
        <pre>
          <code className={classes.codeCard}>{`
.btn:hover::before {
  transform: translateX(0);
}
.btn:hover {
  color: white;
}
        `}</code>
        </pre>
      </div>
    </div>
  );
};

export default SwipeButton;
