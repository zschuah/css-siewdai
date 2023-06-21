import { makeStyles } from "@material-ui/core";
import { displayProps } from "common/commonProps";
import PreCode, { handleRules } from "common/PreCode";
import styled from "styled-components";

const useStyles = makeStyles(displayProps);

const Styled1 = styled.button`
  cursor: pointer;
  background: transparent;
  color: #351435;
  font-size: 40px;
  border: 5px solid #351435;
  padding: 40px 80px;
  position: relative;
  /* TRANSITION FOR TEXT */
  transition: all 0.5s;
  overflow: hidden;
`;

const Styled2 = styled(Styled1)`
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: #351435;
    z-index: -1;
    transform: translateX(-100%);
    /* TRANSITION FOR BACKGROUND */
    transition: all 0.5s;
  }
`;

const Styled3 = styled(Styled2)`
  &:hover::before {
    transform: translateX(0);
  }
  &:hover {
    color: white;
  }
`;

const StyledFinal = styled(Styled3)`
  /* Mobile */
  @media (max-width: 575px) {
    font-size: 20px;
    padding: 20px 40px;
  }
`;

const SwipeButton = () => {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.displayTitle}>Swipe Button</h1>

      <div className={classes.displayMain}>
        <StyledFinal>Hover Me</StyledFinal>
      </div>

      <div className={classes.codeBox}>
        <PreCode>{handleRules(Styled1)}</PreCode>
        <PreCode>{handleRules(Styled2)}</PreCode>
        <PreCode>{handleRules(Styled3)}</PreCode>
      </div>
    </div>
  );
};

export default SwipeButton;
