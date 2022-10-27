import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { TRANSITION_TIME } from "common/commonProps";
import TestSandbox from "components/TestSandbox";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import teh from "../assets/teh.png";
import TestRedux from "../components/TestRedux";
import creditList from "../data/creditList";
import { setThemeColor } from "../redux/actions";
import styles from "./Welcome.module.css";

const useStyles = makeStyles({
  styledButton: {
    background: (props) => props.themeColor,
    transition: "background " + TRANSITION_TIME,
    "&:hover": {
      background: (props) => props.themeColor,
      opacity: 0.8,
    },
  },
  styledAvatar: {
    background: (props) => props.themeColor,
    transition: "background " + TRANSITION_TIME,
  },
  styledTestRedux: {
    border: "2px solid green",
    display: "none",
  },
});

const Welcome = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const themeColor = useSelector((state) => state.themeColor);
  const classes = useStyles({ themeColor });

  const flavorList = ["purple", "#b60000", "#006800", "#000080"];

  //toggle TRUE to test
  const isTestSandbox = false;
  const isTestRedux = false;

  return (
    <div>
      {isTestSandbox && <TestSandbox />}
      {isTestRedux && <TestRedux />}

      <div className={styles.hero}>
        <img src={teh} alt="teh" className={styles.heroImage} />
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>CSS Siewdai</h1>
          <p className={styles.heroDescription}>
            CSS, with a little sugar in it
          </p>
          <Button
            variant="contained"
            className={`${classes.styledButton} ${styles.heroButton}`}
            onClick={() => history.push("/rotating-button")}
          >
            Get Started
          </Button>

          <div className={styles.flavorBox}>
            {flavorList.map((flavor) => (
              <Button
                className={styles.squareButton}
                style={{ background: flavor }}
                onClick={() => dispatch(setThemeColor(flavor))}
                key={flavor}
              ></Button>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.credits}>
        <p>
          Hi there! CSS Siewdai is still a work in progress. This is mainly just
          a sandbox for me to play around with various CSS tricks that I'm
          learning online. I will be updating this as I go along.
        </p>
        <p>Here are some of the resources that I am using so far:</p>

        <List>
          {creditList.map((credit) => (
            <ListItem alignItems="flex-start" key={credit.name}>
              <ListItemAvatar>
                <Avatar className={classes.styledAvatar}>
                  {credit.avatar}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Link to={{ pathname: credit.link }} target="_blank">
                    {credit.name}
                  </Link>
                }
                secondary={credit.description}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export default Welcome;
