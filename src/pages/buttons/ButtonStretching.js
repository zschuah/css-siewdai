import { makeStyles } from "@material-ui/core";
import { displayProps } from "common/commonProps";
import hljs from "highlight.js";
import { useEffect } from "react";
import styles from "./ButtonStretching.module.css";

const useStyles = makeStyles(displayProps);

const ButtonStretching = () => {
  const classes = useStyles();

  useEffect(() => {
    hljs.highlightAll();
  });

  return (
    <div>
      <h1 className={classes.displayTitle}>Button Stretching</h1>

      <div className={classes.displayMain}>
        <button className={styles.btn}>Button</button>
      </div>

      <div className={classes.codeBox}>
        <pre>
          <code className={classes.codeCard}>
            {`
.btn {
  cursor: pointer;
  background: transparent;
  padding: 40px 80px;
  color: #e1332d;
  border: 3px solid #e1332d;
  text-transform: uppercase;
  font-size: 40px;
  font-weight: 300;
  letter-spacing: -2px;
  transition: all 0.2s;
}
            `}
          </code>
        </pre>
        <pre>
          <code className={classes.codeCard}>
            {`
.btn:hover {
  font-weight: 900;
  letter-spacing: 10px;
  border: 7px solid #e1332d;
}
            `}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default ButtonStretching;
