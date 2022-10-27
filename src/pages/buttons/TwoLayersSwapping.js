import { makeStyles } from "@material-ui/core";
import { displayProps } from "common/commonProps";
import hljs from "highlight.js";
import { useEffect } from "react";
import styles from "./TwoLayersSwapping.module.css";

const useStyles = makeStyles(displayProps);

const TwoLayersSwapping = () => {
  const classes = useStyles();

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div>
      <h1 className={classes.displayTitle}>Two Layers Swapping</h1>

      <div className={classes.displayMain}>
        <button className={styles.btn}>Hover Me</button>
      </div>

      <div className={classes.codeBox}>
        <pre>
          <code className={classes.codeCard}>
            {`
.btn {
  cursor: pointer;
  background: #262626;
  font-size: 40px;
  border: 4px solid #262626;
  padding: 40px 80px;
  position: relative;
  /* Hide original text */
  color: transparent;
  overflow: hidden;
}
            `}
          </code>
        </pre>
        <pre>
          <code className={classes.codeCard}>
            {`
.btn::before {
  content: "Hover Me";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #fffa65;
  color: #262626;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
}
.btn::after {
  content: "Hover Me";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #fffa65;
  color: #262626;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  /* Start from BOTTOM LEFT */
  transform:
    translate(-100%, 100%);
}
            `}
          </code>
        </pre>
        <pre>
          <code className={classes.codeCard}>
            {`
.btn:hover::before {
  /* Moves to TOP RIGHT */
  transform: translate(100%, -100%);
}
.btn:hover::after {
  /* Moves to original position */
  transform: translate(0, 0);
}
            `}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default TwoLayersSwapping;
