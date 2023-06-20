import { makeStyles } from "@material-ui/core";
import { displayProps } from "common/commonProps";
import styles from "./SplittedButton.module.css";

const useStyles = makeStyles(displayProps);

const SplittedButton = () => {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.displayTitle}>Splitted Button</h1>

      <div className={`${classes.displayMain} ${classes.bgDark}`}>
        <button className={styles.btn}>
          <span className={styles.span}>Hover Me</span>
        </button>
      </div>

      <div className={classes.codeBox}>
        <pre>
          <code className={classes.codeCard}>
            {`
.btn {
  cursor: pointer;
  background: transparent;
  text-transform: uppercase;
  font-size: 25px;
  color: #f6b93b;
  letter-spacing: 3px;
  padding: 25px 50px;
  border: 3px solid #f6b93b;
  transition: all 0.5s;
  position: relative;
  /* IMPORTANT to raise button */
  z-index: 10;
  overflow: hidden;
}
.btn:hover {
  color: #222;
}
  
.btn::before,
.btn::after,
.span:before,
.span:after {
  content: "";
  position: absolute;
  /* Divided by 4 parts */
  /* Buffer to cover gaps */
  width: 26%;
  height: 100%;
  background-color: #f6b93b;
  /* Put squares BEHIND text */
  z-index: -1;
  transition: all 0.2s;
}
        `}
          </code>
        </pre>
        <pre>
          <code className={classes.codeCard}>{`
/* 1st square */
.btn::before {
  top: 100%;
  left: 0;
}
/* 2nd square */
.btn::after {
  top: -100%;
  left: 25%;
  transition-delay: 0.1s;
}

.btn:hover::before {
  top: 0;
  left: 0;
}
.btn:hover::after {
  top: 0;
  left: 25%;
}
        `}</code>
        </pre>
        <pre>
          <code className={classes.codeCard}>{`
/* 3rd square */
.span::before {
  top: 100%;
  right: 25%;
  transition-delay: 0.2s;
}
.btn:hover .span::before {
  top: 0;
  right: 25%;
}

/* 4th square */
.span::after {
  top: -100%;
  right: 0;
  transition-delay: 0.3s;
}
.btn:hover .span::after {
  top: 0;
  right: 0;
}
        `}</code>
        </pre>
      </div>
    </div>
  );
};

export default SplittedButton;
