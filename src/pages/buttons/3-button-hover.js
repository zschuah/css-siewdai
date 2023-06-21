import { makeStyles } from "@material-ui/core";
import { displayProps } from "common/commonProps";
import PreCode, { handleRules } from "common/PreCode";
import styled from "styled-components";

const useStyles = makeStyles(displayProps);

const Styled1 = styled.button`
  cursor: pointer;
  background: transparent;
  padding: 40px 80px;
  color: #262626;
  font-size: 45px;
  letter-spacing: 2px;
  border: 4px solid #262626;
  position: relative;
  transition: all 0.5s;
`;

const Styled2 = styled(Styled1)`
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #262626;
    transition: all 0.5s;
    transform: rotateX(90deg);
    /* Puts background BEHIND text */
    z-index: -1;
  }
  &:hover::before {
    transform: rotateX(0deg);
  }
  &:hover {
    color: white;
  }
`;

const Styled3 = styled(Styled2)`
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #262626;
    transition: all 0.5s;
    transform: rotateY(90deg);
    /* Puts background BEHIND text */
    z-index: -1;
  }
  &:hover::after {
    transform: rotateY(0deg);
  }
`;

const StyledFinal = styled(Styled3)`
  /* Mobile */
  @media (max-width: 575px) {
    font-size: 20px;
    padding: 20px 40px;
  }
`;

const ButtonHover = () => {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.displayTitle}>Button Hover</h1>

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

export default ButtonHover;
