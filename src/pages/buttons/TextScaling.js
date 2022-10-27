import { makeStyles } from "@material-ui/core";
import { displayProps } from "common/commonProps";
import hljs from "highlight.js";
import { useEffect } from "react";
import styles from "./TextScaling.module.css";

const useStyles = makeStyles(displayProps);

const TextScaling = () => {
  const classes = useStyles();

  useEffect(() => {
    hljs.highlightAll();
  });

  return (
    <div>
      <h1 className={classes.displayTitle}>Text Scaling</h1>

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
  color: #262626;
  font-size: 40px;
  border: 4px solid #262626;
  padding: 40px 80px;
  transition: all 0.5s;
  position: relative;
  /* Contain HUGE button */
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
  background: #262626;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  /* Make HUGE and INVISIBLE */
  transform: scale(5);
  opacity: 0;
  transition: all 0.5s;
}
.btn:hover::before {
  transform: scale(1);
  opacity: 1;
}
            `}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default TextScaling;
