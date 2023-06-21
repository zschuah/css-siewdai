import { makeStyles } from "@material-ui/core";
import PreCode, { handleRules } from "common/PreCode";
import { displayProps } from "common/commonProps";
import styled from "styled-components";

const useStyles = makeStyles(displayProps);

const StyledSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ff0;
  border-radius: 8px;
  transform: scale(0);
  transition: all 0.3s;
  /* Put yellow box behind text */
  z-index: -1;
`;

const Styled1 = styled.button`
  cursor: pointer;
  width: 220px;
  height: 80px;
  color: #ff0;
  background: none;
  font-size: 26px;
  text-transform: uppercase;
  transition: all 0.5s;
  position: relative;
  /* Invisible border */
  border: none;
  /* IMPORTANT to raise button */
  z-index: 10;

  &::before,
  &::after {
    content: "";
    position: absolute;
    /* Positioning only the top */
    top: 50%;
    width: 20px;
    height: 20px;
    background: #ff0;
    border-radius: 50%;
    /* Center dots properly */
    transform: translateY(-50%);
    transition: all 0.3s;
    /* Put dots behind text */
    z-index: -1;
    opacity: 0;
  }
  &::before {
    left: 0;
    /* Horizontal distance */
    /* Vertical distance */
    /* Blur, color */
    box-shadow: -100px 0 0 #ff0;
  }
  &::after {
    right: 0;
    box-shadow: 100px 0 0 #ff0;
  }
`;

const Styled2 = styled(Styled1)`
  &:hover::before {
    /* Shadow will move with dot */
    left: 50%;
    box-shadow: 30px 0 0 #ff0;
    /* Center dot properly */
    /* Maintain vertical positioning */
    /* Both dots will overlap */
    transform: translateX(-50%) translateY(-50%);
    opacity: 1;
  }
  &:hover::after {
    right: 50%;
    box-shadow: -30px 0 0 #ff0;
    transform: translateX(50%) translateY(-50%);
    opacity: 1;
  }

  &:hover ${StyledSpan} {
    transform: scale(1);
    /* After dots finish moving */
    transition-delay: 0.4s;
  }
  &:hover {
    color: #262626;
    transition-delay: 0.4s;
  }
`;

const StyledFinal = styled(Styled2)`
  /* Mobile */
  @media (max-width: 575px) {
    font-size: 20px;
    width: 150px;
    height: 50px;

    &::before,
    &::after {
      width: 15px;
      height: 15px;
    }
  }
`;

const ThreeCircles = () => {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.displayTitle}>Three Circles</h1>

      <div className={`${classes.displayMain} ${classes.bgDark}`}>
        <StyledFinal>
          <StyledSpan></StyledSpan>
          <span>hover me</span>
        </StyledFinal>
      </div>

      <div className={classes.codeBox}>
        <PreCode>{handleRules(Styled1)}</PreCode>
        <PreCode>
          {handleRules(Styled2) + ".btnSpan" + Styled2.componentStyle.rules[2]}
        </PreCode>
        <PreCode>{".btnSpan {" + handleRules(StyledSpan) + "}"}</PreCode>
      </div>
    </div>
  );
};

export default ThreeCircles;
