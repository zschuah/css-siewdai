import { makeStyles } from "@material-ui/core";
import { displayProps } from "common/commonProps";
import hljs from "highlight.js";
import { useEffect } from "react";
import styles from "./RotatingThreeLayers.module.css";

const useStyles = makeStyles(displayProps);

const RotatingThreeLayers = () => {
  const classes = useStyles();

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div>
      <h1 className={classes.displayTitle}>Rotating Three Layers</h1>

      <div className={`${classes.displayMain} ${classes.bgDark}`}>
        <button className={styles.btn}>Button</button>
      </div>

      <div className={classes.codeBox}>
        <pre>
          <code className={classes.codeCard}>
            {`
.btn {
    cursor: pointer;
    padding: 20px 40px;
    text-transform: uppercase;
    background: #f1c40f;
    color: white;
    font-size: 20px;
    letter-spacing: 2px;
    position: relative;
    /* Fix overflowing border */
    border: none;
}
            `}
          </code>
        </pre>
        <pre>
          <code className={classes.codeCard}>
            {`
.btn::before {
    content: "button";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #2ce771;
    /* To center text */
    display: flex;
    justify-content: center;
    align-items: center;
    /* Rotate until behind */
    transform: rotateX(270deg);
    transform-origin: top;
    transition: all 0.5s;
}
.btn:hover::before,
.btn:hover::after {
    /* Flip forward on hover */
    transform: rotateX(0);
}
            `}
          </code>
        </pre>
        <pre>
          <code className={classes.codeCard}>
            {`
.btn::after {
    content: "button";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: red;
    /* To center text */
    display: flex;
    justify-content: center;
    align-items: center;
    /* Rotate until behind */
    transform: rotateX(270deg);
    transform-origin: top;
    transition: all 0.5s;

    /* Delay for red */
    transition-delay: 0.25s;
}
            `}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default RotatingThreeLayers;
