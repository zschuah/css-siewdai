import { makeStyles } from "@material-ui/core";
import PreCode, { handleRules } from "common/PreCode";
import { displayProps } from "common/commonProps";
import styled from "styled-components";

const useStyles = makeStyles(displayProps);

const StyledSpan = styled.span`
  &::before,
  &::after {
    content: "";
    position: absolute;
    /* Divided by 4 parts */
    /* Buffer to cover gaps */
    width: 26%;
    height: 100%;
    background-color: #f6b93b;
    /* Put squares BEHIND text */
    z-index: -1;
    transition: all 0.2s;
  }

  /* 3rd square */
  &::before {
    top: 100%;
    right: 25%;
    transition-delay: 0.2s;
  }

  /* 4th square */
  &::after {
    top: -100%;
    right: 0;
    transition-delay: 0.3s;
  }
`;

const Styled1 = styled.button`
  cursor: pointer;
  background: transparent;
  text-transform: uppercase;
  font-size: 25px;
  color: #f6b93b;
  letter-spacing: 3px;
  padding: 25px 50px;
  border: 3px solid #f6b93b;
  transition: all 0.5s;
  position: relative;
  /* IMPORTANT to raise button */
  z-index: 10;
  overflow: hidden;
  &:hover {
    color: #222;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    /* Divided by 4 parts */
    /* Buffer to cover gaps */
    width: 26%;
    height: 100%;
    background-color: #f6b93b;
    /* Put squares BEHIND text */
    z-index: -1;
    transition: all 0.2s;
  }
`;

const Styled2 = styled(Styled1)`
  /* 1st square */
  &::before {
    top: 100%;
    left: 0;
  }
  /* 2nd square */
  &::after {
    top: -100%;
    left: 25%;
    transition-delay: 0.1s;
  }

  &:hover::before {
    top: 0;
    left: 0;
  }
  &:hover::after {
    top: 0;
    left: 25%;
  }

  &:hover ${StyledSpan}::before {
    top: 0;
    right: 25%;
  }
  &:hover ${StyledSpan}::after {
    top: 0;
    right: 0;
  }
`;

const StyledFinal = styled(Styled2)`
  /* Mobile */
  @media (max-width: 575px) {
    font-size: 20px;
    padding: 20px 40px;
  }
`;

const SplittedButton = () => {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.displayTitle}>Splitted Button</h1>

      <div className={`${classes.displayMain} ${classes.bgDark}`}>
        <StyledFinal>
          <StyledSpan>Hover Me</StyledSpan>
        </StyledFinal>
      </div>

      <div className={classes.codeBox}>
        <PreCode>{handleRules(Styled1)}</PreCode>
        <PreCode>
          {handleRules(Styled2) +
            Styled2.componentStyle.rules[2] +
            Styled2.componentStyle.rules[4]}
        </PreCode>
        <PreCode>{".btnSpan {" + handleRules(StyledSpan) + "}"}</PreCode>
      </div>
    </div>
  );
};

export default SplittedButton;
