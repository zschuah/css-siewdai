import { makeStyles } from "@material-ui/core";
import { displayProps } from "common/commonProps";
import styles from "./ButtonHover2.module.css";

const useStyles = makeStyles(displayProps);

const ButtonHover2 = () => {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.displayTitle}>Button Hover 2</h1>

      <div className={classes.displayMain}>
        <button className={styles.btn}>button hover effect</button>
      </div>

      <div className={classes.codeBox}>
        <pre>
          <code className={classes.codeCard}>
            {`
.btn {
    cursor: pointer;
    background: transparent;
    border: none;
    text-transform: uppercase;
    width: 300px;
    height: 60px;
    font-weight: bold;
    letter-spacing: 2px;
    position: relative;
    transition: all 0.2s;
    color: white;
}
  
.btn::before {
    content: "";
    position: absolute;
    /* Shift top and left */
    top: -3px;
    left: -3px;
    width: 100%;
    height: 100%;
    background: #20caff;
    /* Puts background BEHIND text */
    z-index: -1;
    /* Blend background */
    mix-blend-mode: multiply;
    transition: all 0.2s;
    /* Shift anchor point */
    transform-origin: top;
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
    /* Shift bottom and right */
    top: 3px;
    left: 3px;
    width: 100%;
    height: 100%;
    background: #ff7675;
    /* Puts background BEHIND text */
    z-index: -1;
    /* Blend background */
    mix-blend-mode: multiply;
    transition: all 0.2s;
    /* Shift anchor point */
    transform-origin: bottom;
}
  
.btn:hover::before {
    top: -6px;
    left: 0;
    transform: perspective(1000px) 
    rotateX(75deg);
}
.btn:hover::after {
    top: 6px;
    left: 0;
    transform: perspective(1000px) 
    rotateX(-75deg);
}
  
.btn:hover {
    color: #272727;
}
              `}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default ButtonHover2;
