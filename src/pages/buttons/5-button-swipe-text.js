import { makeStyles } from "@material-ui/core";
import { displayProps } from "common/commonProps";
import PreCode, { handleRules } from "common/PreCode";
import styled from "styled-components";

const useStyles = makeStyles(displayProps);

const Styled1 = styled.button`
  cursor: pointer;
  background: transparent;
  color: white;
  font-size: 40px;
  border: 5px solid white;
  padding: 40px 80px;
  position: relative;
  transition: all 0.5s;
  overflow: hidden;
`;

const Styled2 = styled(Styled1)`
  &::before {
    content: "YEAH!";
    color: white;
    position: absolute;
    inset: 0;
    background: #f44336;
    transform: translateY(-100%);
    transition: all 0.5s;

    /* To center text */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:hover::before {
    transform: translateY(0);
  }
`;

const StyledFinal = styled(Styled2)`
  /* Mobile */
  @media (max-width: 575px) {
    font-size: 20px;
    padding: 20px 40px;
  }
`;

const ButtonSwipeText = () => {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.displayTitle}>Button Swipe Text</h1>

      <div className={`${classes.displayMain} ${classes.bgDark}`}>
        <StyledFinal>Hover Me</StyledFinal>
      </div>

      <div className={classes.codeBox}>
        <PreCode>{handleRules(Styled1)}</PreCode>
        <PreCode>{handleRules(Styled2)}</PreCode>
      </div>
    </div>
  );
};

export default ButtonSwipeText;
