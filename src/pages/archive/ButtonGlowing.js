import { makeStyles } from "@material-ui/core";
import { displayProps } from "common/commonProps";
import styles from "./ButtonGlowing.module.css";

const useStyles = makeStyles(displayProps);

const ButtonGlowing = () => {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.displayTitle}>Button Glowing</h1>

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
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}
.btn:hover {
  background: #f44336;
}
            `}
          </code>
        </pre>
        <pre>
          <code className={classes.codeCard}>
            {`
.btn::before {
  content: "";
  background-color: white;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  position: absolute;
  transform: translateX(-100%) 
    rotate(45deg);
  transition: all 0.3s;
}
.btn:hover::before {
  transform: translateX(100%) 
    rotate(45deg);
}
            `}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default ButtonGlowing;
