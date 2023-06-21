import Welcome from "pages/Welcome";
import RotatingButton from "pages/buttons/1-rotating-button";
import RotatingThreeLayers from "pages/buttons/10-rotating-three-layers";
import LayersSwapping from "pages/buttons/11-layers-swapping";
import ThreeCircles from "pages/buttons/12-three-circles";
import ButtonHover2 from "pages/buttons/13-button-hover-2";
import SplittedButton from "pages/buttons/14-splitted-button";
import BorderSwapping from "pages/buttons/15-border-swapping";
import SwipeButton from "pages/buttons/2-swipe-button";
import ButtonHover from "pages/buttons/3-button-hover";
import ButtonStretching from "pages/buttons/4-button-stretching";
import ButtonSwipeText from "pages/buttons/5-button-swipe-text";
import ButtonGlowing from "pages/buttons/6-button-glowing";
import TwoLayersSwapping from "pages/buttons/7-two-layers-swapping";
import TextScaling from "pages/buttons/8-text-scaling";
import CircularSwapping from "pages/buttons/9-circular-swapping";
import { Route } from "react-router-dom";
import ImageEffect1 from "pages/images/ImageEffect1";
import ImageEffect2 from "pages/images/ImageEffect2";
import ImageEffect3 from "pages/images/ImageEffect3";

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
  <Route
    path="/border-swapping"
    component={BorderSwapping}
    key="Border Swapping"
  />,
];

export const routeImages = [
  <Route
    path="/image-effect-1"
    component={ImageEffect1}
    key="Image Effect 1"
  />,
  <Route
    path="/image-effect-2"
    component={ImageEffect2}
    key="Image Effect 2"
  />,
  <Route
    path="/image-effect-3"
    component={ImageEffect3}
    key="Image Effect 3"
  />,
];

export const routeAll = [...routeWelcome, ...routeButtons, ...routeImages];
