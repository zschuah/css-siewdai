import { Container, makeStyles, SwipeableDrawer } from "@material-ui/core";
import { TRANSITION_TIME } from "common/commonProps";
import hljs from "highlight.js";
import "highlight.js/styles/vs2015.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import styles from "./App.module.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { routeAll } from "./routes";

const useStyles = makeStyles({
  styledContainer: {
    border: (props) => `5px solid ${props.themeColor}`,
    transition: "all " + TRANSITION_TIME,
  },
  styledFooter: {
    background: (props) => props.themeColor,
    transition: "all " + TRANSITION_TIME,
  },
});

function App() {
  const themeColor = useSelector((state) => state.themeColor);

  const classes = useStyles({ themeColor });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    hljs.configure({ ignoreUnescapedHTML: true });
  }, []);

  return (
    <div className="App">
      <Navbar setIsDrawerOpen={setIsDrawerOpen} />

      <SwipeableDrawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onOpen={() => setIsDrawerOpen(true)}
      >
        <Sidebar setIsDrawerOpen={setIsDrawerOpen} />
      </SwipeableDrawer>

      <div style={{ marginTop: "3rem" }}></div>

      <div className={classes.styledContainer}>
        <Container>
          <Switch>{routeAll}</Switch>
        </Container>
        <div style={{ marginTop: "10rem" }}></div>
      </div>

      <div className={`${classes.styledFooter} ${styles.footer}`}>
        <Container>
          <small>Copyright © 2022 zschuah. All Rights Reserved.</small>
        </Container>
      </div>

      <div style={{ marginTop: "1rem" }}></div>
    </div>
  );
}

export default App;
