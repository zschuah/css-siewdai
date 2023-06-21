import { makeStyles } from "@material-ui/core";
import PreCode, { handleRules } from "common/PreCode";
import { displayProps } from "common/commonProps";
import styled from "styled-components";

const useStyles = makeStyles(displayProps);

const Styled1 = styled.button`
  cursor: pointer;
  background: transparent;
  padding: 40px 80px;
  color: #e1332d;
  border: 3px solid #e1332d;
  text-transform: uppercase;
  font-size: 40px;
  font-weight: 300;
  letter-spacing: -2px;
  transition: all 0.2s;
`;

const Styled2 = styled(Styled1)`
  &:hover {
    font-weight: 900;
    letter-spacing: 10px;
    border: 7px solid #e1332d;
  }
`;

const StyledFinal = styled(Styled2)`
  /* Mobile */
  @media (max-width: 575px) {
    font-size: 20px;
    padding: 20px 40px;
  }
`;

const ButtonStretching = () => {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.displayTitle}>Button Stretching</h1>

      <div className={classes.displayMain}>
        <StyledFinal>Button</StyledFinal>
      </div>

      <div className={classes.codeBox}>
        <PreCode>{handleRules(Styled1)}</PreCode>
        <PreCode>{handleRules(Styled2)}</PreCode>
      </div>
    </div>
  );
};

export default ButtonStretching;
