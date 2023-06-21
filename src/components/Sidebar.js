import {
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import LandscapeIcon from "@material-ui/icons/Landscape";
import MouseIcon from "@material-ui/icons/Mouse";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { routeButtons, routeImages } from "../routes";
import styles from "./Sidebar.module.css";

const Sidebar = ({ setIsDrawerOpen }) => {
  const history = useHistory();
  const location = useLocation();
  const themeColor = useSelector((state) => state.themeColor);

  const isPathInRoutes = (routes) => {
    const pathMap = routes.map((route) => route.props.path);
    return pathMap.includes(location.pathname) ? true : false;
  };
  //COLLAPSE SECTION - open or close
  const [isButtons, setIsButtons] = useState(isPathInRoutes(routeButtons));
  const [isImages, setIsImages] = useState(isPathInRoutes(routeImages));

  const handleResetCollapse = () => {
    setIsButtons(false);
    setIsImages(false);
  };

  const handlePath = (path) => {
    setIsDrawerOpen(false);
    history.push(path);
  };

  const handleListItemStyle = (pathname) => {
    if (pathname === location.pathname) {
      return {
        background: themeColor,
        color: "white",
      };
    }
  };

  return (
    <div>
      <div className={styles.intro}>
        <h3 className={styles.title} onClick={() => handlePath("/")}>
          CSS Siewdai
        </h3>
        <p className={styles.subtitle}>Updated on Jun 2023</p>
      </div>

      <Divider />
      <List dense>
        <ListItem
          button
          onClick={() => {
            handleResetCollapse();
            setIsButtons(!isButtons);
          }}
        >
          <MouseIcon style={{ color: themeColor }} />
          <span>Buttons</span>
        </ListItem>
        <Collapse in={isButtons}>
          {routeButtons.map((route) => (
            <ListItem
              button
              onClick={() => handlePath(route.props.path)}
              style={handleListItemStyle(route.props.path)}
              key={route.key}
            >
              <ListItemText primary={route.key} />
            </ListItem>
          ))}
        </Collapse>

        <ListItem
          button
          onClick={() => {
            handleResetCollapse();
            setIsImages(!isImages);
          }}
        >
          <LandscapeIcon style={{ color: themeColor }} />
          <span>Images</span>
        </ListItem>
        <Collapse in={isImages}>
          {routeImages.map((route) => (
            <ListItem
              button
              onClick={() => handlePath(route.props.path)}
              style={handleListItemStyle(route.props.path)}
              key={route.key}
            >
              <ListItemText primary={route.key} />
            </ListItem>
          ))}
        </Collapse>
      </List>
    </div>
  );
};

export default Sidebar;
