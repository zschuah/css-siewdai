import { makeStyles } from "@material-ui/core";
import { displayProps } from "common/commonProps";
import styles from "./CircularSwapping.module.css";

const useStyles = makeStyles(displayProps);

const CircularSwapping = () => {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.displayTitle}>Circular Swapping</h1>

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
  border: 4px solid tomato;
  color: tomato;
  padding: 20px 40px;
  font-size: 25px;
  text-transform: uppercase;
  transition: all 0.5s;
  position: relative;
  overflow: hidden;
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
.btn::before {
  content: "";
  position: absolute;
  /* Alt: bottom 0 */
  top: 0;
  left: 0;
  width: 100%;
  background: tomato;
  z-index: -1;
  /* Alt: 50% 50% 0 0 */
  border-radius: 0 0 50% 50%;
  height: 0;
  transition: all 0.5s;
}
.btn:hover::before {
  height: 190%;
}
              `}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CircularSwapping;
