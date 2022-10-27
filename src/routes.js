import ButtonGlowing from "pages/buttons/ButtonGlowing";
import ButtonHover from "pages/buttons/ButtonHover";
import ButtonHover2 from "pages/buttons/ButtonHover2";
import ButtonStretching from "pages/buttons/ButtonStretching";
import ButtonSwipeText from "pages/buttons/ButtonSwipeText";
import CircularSwapping from "pages/buttons/CircularSwapping";
import LayersSwapping from "pages/buttons/LayersSwapping";
import RotatingButton from "pages/buttons/RotatingButton";
import RotatingThreeLayers from "pages/buttons/RotatingThreeLayers";
import SwipeButton from "pages/buttons/SwipeButton";
import TextScaling from "pages/buttons/TextScaling";
import ThreeCircles from "pages/buttons/ThreeCircles";
import TwoLayersSwapping from "pages/buttons/TwoLayersSwapping";
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
];

export const routeAll = [...routeWelcome, ...routeButtons];
