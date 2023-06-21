import { makeStyles } from "@material-ui/core";
import PreCode, { handleRules } from "common/PreCode";
import { displayProps } from "common/commonProps";
import styled from "styled-components";

const useStyles = makeStyles(displayProps);

const Styled1 = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 45px;
  border: 5px solid black;
  padding: 40px 80px;
  position: relative;
  overflow: hidden;
`;

const Styled2 = styled(Styled1)`
  &::before {
    content: "";
    position: absolute;
    background: yellow;
    inset: 0;
    z-index: -1;
    transform-origin: bottom left;
    transform: rotate(-90deg);
    transition: all 0.5s;
  }
`;

const Styled3 = styled(Styled2)`
  &:hover::before {
    transform: rotate(0deg);
  }
`;

const StyledFinal = styled(Styled3)`
  /* Mobile */
  @media (max-width: 575px) {
    font-size: 20px;
    padding: 20px 40px;
  }
`;

const RotatingButton = () => {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.displayTitle}>Rotating Button</h1>

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

export default RotatingButton;
