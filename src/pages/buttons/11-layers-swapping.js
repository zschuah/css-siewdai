import { makeStyles } from "@material-ui/core";
import PreCode, { handleRules } from "common/PreCode";
import { displayProps } from "common/commonProps";
import styled from "styled-components";

const useStyles = makeStyles(displayProps);

const Styled1 = styled.button`
  cursor: pointer;
  background: transparent;
  padding: 20px 40px;
  text-transform: uppercase;
  letter-spacing: 4px;
  /* Main button is invisible */
  color: transparent;
  border: 3px solid #ff0;
  font-size: 30px;
  position: relative;

  &::before {
    content: "button";
    position: absolute;
    top: 0;
    /* Init on default position */
    left: 0;
    width: 100%;
    height: 100%;
    background: #363636;
    color: #ff0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
  }
  &:hover::before {
    /* Final on right of button */
    left: 100%;
    transform: scale(0) rotateY(360deg);
    opacity: 0;
  }
`;

const Styled2 = styled(Styled1)`
  &::after {
    content: "button";
    position: absolute;
    top: 0;
    /* Init on left of button */
    left: -100%;
    width: 100%;
    height: 100%;
    background: #363636;
    color: #ff0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
    transform: scale(0) rotateY(0);
    opacity: 0;
  }
  &:hover::after {
    /* Final on default position */
    left: 0;
    transform: scale(1) rotateY(360deg);
    opacity: 1;
  }
`;

const StyledFinal = styled(Styled2)`
  /* Mobile */
  @media (max-width: 575px) {
    font-size: 10px;
    padding: 10px 20px;
  }
`;

const LayersSwapping = () => {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.displayTitle}>Layers Swapping</h1>

      <div className={`${classes.displayMain} ${classes.bgGrey}`}>
        <StyledFinal>button</StyledFinal>
      </div>

      <div className={classes.codeBox}>
        <PreCode>{handleRules(Styled1)}</PreCode>
        <PreCode>{handleRules(Styled2)}</PreCode>
      </div>
    </div>
  );
};

export default LayersSwapping;
