import { AppBar, IconButton, makeStyles, Toolbar } from "@material-ui/core";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import MenuIcon from "@material-ui/icons/Menu";
import { TRANSITION_TIME } from "common/commonProps";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { routeAll } from "../routes";
import styles from "./Navbar.module.css";

const useStyles = makeStyles({
  styledAppBar: {
    background: (props) => props.themeColor,
    transition: "all " + TRANSITION_TIME,
  },
});

const Navbar = ({ setIsDrawerOpen }) => {
  const history = useHistory();
  const location = useLocation();

  const themeColor = useSelector((state) => state.themeColor);
  const classes = useStyles({ themeColor });

  //Toggle TRUE to see currentIndex
  const isShowCurrentIndex = false;
  const [currentIndex, setCurrentIndex] = useState(0);

  //Pass in -1 or 1 so that we can navigate to PREVIOUS or NEXT element in routeAll array
  const handlePath = (direction) => {
    history.push(routeAll[currentIndex + direction].props.path);
  };

  //Will automatically setCurrentIndex when PAGE CHANGES
  //setCurrentIndex will ENABLE or DISABLE left and right arrows
  useEffect(() => {
    let foundIndex = routeAll.findIndex(
      (route) => route.props.path === location.pathname
    );
    setCurrentIndex(foundIndex);
  }, [location]);

  return (
    <AppBar className={classes.styledAppBar}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          onClick={() => setIsDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        <h3 className={styles.appbarTitle} onClick={() => history.push("/")}>
          CSS Siewdai
        </h3>
        <p className={styles.slogan}>CSS, with a little sugar in it</p>

        <div style={{ marginLeft: "auto" }}>
          {isShowCurrentIndex && <span>{currentIndex}</span>}
          <IconButton
            color="inherit"
            onClick={() => handlePath(-1)}
            disabled={currentIndex <= 1}
          >
            <KeyboardArrowLeftIcon />
          </IconButton>
          <IconButton
            color="inherit"
            edge="end"
            onClick={() => handlePath(1)}
            disabled={
              currentIndex === 0 || currentIndex === routeAll.length - 1
            }
          >
            <KeyboardArrowRightIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
