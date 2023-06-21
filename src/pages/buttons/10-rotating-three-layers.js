import { makeStyles } from "@material-ui/core";
import PreCode, { handleRules } from "common/PreCode";
import { displayProps } from "common/commonProps";
import styled from "styled-components";

const useStyles = makeStyles(displayProps);

const Styled1 = styled.button`
  cursor: pointer;
  padding: 20px 40px;
  text-transform: uppercase;
  background: #f1c40f;
  color: white;
  font-size: 20px;
  letter-spacing: 2px;
  position: relative;
  /* Fix overflowing border */
  border: none;
`;

const Styled2 = styled(Styled1)`
  &::before {
    content: "button";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #2ce771;
    /* To center text */
    display: flex;
    justify-content: center;
    align-items: center;
    /* Rotate until behind */
    transform: rotateX(270deg);
    transform-origin: top;
    transition: all 0.5s;
  }
  &:hover::before,
  &:hover::after {
    /* Flip forward on hover */
    transform: rotateX(0);
  }
`;

const StyledFinal = styled(Styled2)`
  &::after {
    content: "button";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: red;
    /* To center text */
    display: flex;
    justify-content: center;
    align-items: center;
    /* Rotate until behind */
    transform: rotateX(270deg);
    transform-origin: top;
    transition: all 0.5s;

    /* Delay for red */
    transition-delay: 0.25s;
  }
`;

const RotatingThreeLayers = () => {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.displayTitle}>Rotating Three Layers</h1>

      <div className={`${classes.displayMain} ${classes.bgDark}`}>
        <StyledFinal>Button</StyledFinal>
      </div>

      <div className={classes.codeBox}>
        <PreCode>{handleRules(Styled1)}</PreCode>
        <PreCode>{handleRules(Styled2)}</PreCode>
        <PreCode>{handleRules(StyledFinal)}</PreCode>
      </div>
    </div>
  );
};

export default RotatingThreeLayers;
