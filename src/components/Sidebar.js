import {
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import MouseIcon from "@material-ui/icons/Mouse";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { routeButtons } from "../routes";
import styles from "./Sidebar.module.css";

const Sidebar = ({ setIsDrawerOpen }) => {
  const history = useHistory();
  const location = useLocation();

  const themeColor = useSelector((state) => state.themeColor);

  const [isButtons, setIsButtons] = useState(true);

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
        <p className={styles.subtitle}>Updated on Aug 2022</p>
      </div>

      <Divider />
      <List dense>
        <ListItem button onClick={() => setIsButtons(!isButtons)}>
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
      </List>
    </div>
  );
};

export default Sidebar;
