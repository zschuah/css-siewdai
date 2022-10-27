import { makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  login,
  logout,
  setThemeColor,
} from "../redux/actions";

const useStyles = makeStyles({
  styledTestRedux: {
    border: "2px solid green",
  },
  styledSpan: {
    marginLeft: "1rem",
  },
});

const TestRedux = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const themeColor = useSelector((state) => state.themeColor);

  const classes = useStyles();

  return (
    <div className={classes.styledTestRedux}>
      <button onClick={() => dispatch(decrement())}>minus</button>
      <button onClick={() => dispatch(increment(2))}>plus 2</button>
      <button onClick={() => dispatch(increment(5))}>plus 5</button>
      <span className={classes.styledSpan}>Counter: {counter}</span>
      <hr />
      <button onClick={() => dispatch(login())}>login</button>
      <button onClick={() => dispatch(logout())}>logout</button>
      {isLogged && <span className={classes.styledSpan}>VALUABLE INFO</span>}
      <hr />
      <button onClick={() => dispatch(setThemeColor("purple"))}>purple</button>
      <button onClick={() => dispatch(setThemeColor("red"))}>red</button>
      <button onClick={() => dispatch(setThemeColor("green"))}>green</button>
      <button onClick={() => dispatch(setThemeColor("blue"))}>blue</button>
      <span className={classes.styledSpan}>{themeColor}</span>
    </div>
  );
};

export default TestRedux;
