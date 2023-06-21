import { makeStyles } from "@material-ui/core";
import PreCode, { handleRules } from "common/PreCode";
import { displayProps } from "common/commonProps";
import styled from "styled-components";

const useStyles = makeStyles(displayProps);

const Styled1 = styled.button`
  cursor: pointer;
  background: transparent;
  text-transform: uppercase;
  font-size: 22px;
  letter-spacing: 3px;
  height: 60px;
  width: 200px;
  line-height: 60px;
  color: #fdc518;
  position: relative;
  border: none;

  &::before {
    content: "";
    position: absolute;
    height: 90px;
    width: 100%;
    /* stretches border */
    top: -15px;
    left: 0;
    border-left: 2px solid red;
    border-right: 2px solid #fdc518;
    transition: all 0.4s;
  }
`;

const StyledFinal = styled(Styled1)`
  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 230px;
    top: 0;
    /* stretches border */
    left: -15px;
    border-top: 2px solid red;
    border-bottom: 2px solid #fdc518;
    transition: all 0.4s;
    transition-delay: 0.4s;
  }

  &:hover::before {
    transform: rotateY(180deg);
  }
  &:hover::after {
    transform: rotateX(180deg);
  }
`;

const BorderSwapping = () => {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.displayTitle}>Border Swapping</h1>

      <div className={`${classes.displayMain} ${classes.bgDark}`}>
        <StyledFinal>Hover Me</StyledFinal>
      </div>

      <div className={classes.codeBox}>
        <PreCode>{handleRules(Styled1)}</PreCode>
        <PreCode>{handleRules(StyledFinal)}</PreCode>
      </div>
    </div>
  );
};

export default BorderSwapping;
