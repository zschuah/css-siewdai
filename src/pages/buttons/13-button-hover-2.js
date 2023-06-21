import { makeStyles } from "@material-ui/core";
import PreCode, { handleRules } from "common/PreCode";
import { displayProps } from "common/commonProps";
import styled from "styled-components";

const useStyles = makeStyles(displayProps);

const Styled1 = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  text-transform: uppercase;
  width: 300px;
  height: 60px;
  font-weight: bold;
  letter-spacing: 2px;
  position: relative;
  transition: all 0.2s;
  color: white;

  &::before {
    content: "";
    position: absolute;
    /* Shift top and left */
    top: -3px;
    left: -3px;
    width: 100%;
    height: 100%;
    background: #20caff;
    /* Puts background BEHIND text */
    z-index: -1;
    /* Blend background */
    mix-blend-mode: multiply;
    transition: all 0.2s;
    /* Shift anchor point */
    transform-origin: top;
  }
`;

const Styled2 = styled(Styled1)`
  &::after {
    content: "";
    position: absolute;
    /* Shift bottom and right */
    top: 3px;
    left: 3px;
    width: 100%;
    height: 100%;
    background: #ff7675;
    /* Puts background BEHIND text */
    z-index: -1;
    /* Blend background */
    mix-blend-mode: multiply;
    transition: all 0.2s;
    /* Shift anchor point */
    transform-origin: bottom;
  }

  &:hover::before {
    top: -6px;
    left: 0;
    transform: perspective(1000px) rotateX(75deg);
  }
  &:hover::after {
    top: 6px;
    left: 0;
    transform: perspective(1000px) rotateX(-75deg);
  }

  &:hover {
    color: #272727;
  }
`;

const StyledFinal = styled(Styled2)`
  /* Mobile */
  @media (max-width: 575px) {
    width: 200px;
    height: 100px;
  }
`;

const ButtonHover2 = () => {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.displayTitle}>Button Hover 2</h1>

      <div className={classes.displayMain}>
        <StyledFinal>button hover effect</StyledFinal>
      </div>

      <div className={classes.codeBox}>
        <PreCode>{handleRules(Styled1)}</PreCode>
        <PreCode>{handleRules(Styled2)}</PreCode>
      </div>
    </div>
  );
};

export default ButtonHover2;
