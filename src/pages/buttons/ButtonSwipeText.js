import { makeStyles } from "@material-ui/core";
import { displayProps } from "common/commonProps";
import hljs from "highlight.js";
import { useEffect } from "react";
import styles from "./ButtonSwipeText.module.css";

const useStyles = makeStyles(displayProps);

const ButtonSwipeText = () => {
  const classes = useStyles();

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div>
      <h1 className={classes.displayTitle}>Button Swipe Text</h1>

      <div className={`${classes.displayMain} ${classes.bgDark}`}>
        <button className={styles.btn}>Hover Me</button>
      </div>

      <div className={classes.codeBox}>
        <pre>
          <code className={classes.codeCard}>
            {`
.btn {
  cursor: pointer;
  background: transparent;
  color: white;
  font-size: 40px;
  border: 5px solid white;
  padding: 40px 80px;
  position: relative;
  transition: all 0.5s;
  overflow: hidden;
}
            `}
          </code>
        </pre>
        <pre>
          <code className={classes.codeCard}>
            {`
.btn::before {
  content: "YEAH!";
  color: white;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: #f44336;
  transform: translateY(-100%);
  transition: all 0.5s;
  
  /* To center text */
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn:hover::before {
  transform: translateY(0);
}
            `}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default ButtonSwipeText;
