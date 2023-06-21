import ButtonGlowing from "pages/buttons/6-button-glowing";
import ButtonHover from "pages/buttons/3-button-hover";
import ButtonHover2 from "pages/buttons/13-button-hover-2";
import ButtonStretching from "pages/buttons/4-button-stretching";
import ButtonSwipeText from "pages/buttons/5-button-swipe-text";
import CircularSwapping from "pages/buttons/9-circular-swapping";
import LayersSwapping from "pages/buttons/11-layers-swapping";
import RotatingButton from "pages/buttons/1-rotating-button";
import RotatingThreeLayers from "pages/buttons/10-rotating-three-layers";
import SplittedButton from "pages/buttons/14-splitted-button";
import SwipeButton from "pages/buttons/2-swipe-button";
import TextScaling from "pages/buttons/8-text-scaling";
import ThreeCircles from "pages/buttons/12-three-circles";
import TwoLayersSwapping from "pages/buttons/7-two-layers-swapping";
import Welcome from "pages/Welcome";
import { Route } from "react-router-dom";

export const routeWelcome = [
  <Route exact path="/" component={Welcome} key="/" />,
];

export const routeButtons = [
  <Route
    path="/rotating-button"
    component={RotatingButton}
    key="Rotating Button"
  />,
  <Route path="/swipe-button" component={SwipeButton} key="Swipe Button" />,
  <Route path="/button-hover" component={ButtonHover} key="Button Hover" />,
  <Route
    path="/button-stretching"
    component={ButtonStretching}
    key="Button Stretching"
  />,
  <Route
    path="/button-swipe-text"
    component={ButtonSwipeText}
    key="Button Swipe Text"
  />,
  <Route
    path="/button-glowing"
    component={ButtonGlowing}
    key="Button Glowing"
  />,
  <Route
    path="/two-layers-swapping"
    component={TwoLayersSwapping}
    key="Two Layers Swapping"
  />,
  <Route path="/text-scaling" component={TextScaling} key="Text Scaling" />,
  <Route
    path="/circular-swapping"
    component={CircularSwapping}
    key="Circular Swapping"
  />,
  <Route
    path="/rotating-three-layers"
    component={RotatingThreeLayers}
    key="Rotating Three Layers"
  />,
  <Route
    path="/layers-swapping"
    component={LayersSwapping}
    key="Layers Swapping"
  />,
  <Route path="/three-circles" component={ThreeCircles} key="Three Circles" />,
  <Route
    path="/button-hover-2"
    component={ButtonHover2}
    key="Button Hover 2"
  />,
  <Route
    path="/splitted-button"
    component={SplittedButton}
    key="Splitted Button"
  />,
];

export const routeAll = [...routeWelcome, ...routeButtons];
