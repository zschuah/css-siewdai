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
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  &:hover {
    background: #f44336;
  }
`;

const Styled2 = styled(Styled1)`
  &::before {
    content: "";
    background-color: white;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    position: absolute;
    transform: translateX(-100%) rotate(45deg);
    transition: all 0.3s;
  }
  &:hover::before {
    transform: translateX(100%) rotate(45deg);
  }
`;

const StyledFinal = styled(Styled2)`
  /* Mobile */
  @media (max-width: 575px) {
    font-size: 20px;
    padding: 20px 40px;
  }
`;

const ButtonGlowing = () => {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.displayTitle}>Button Glowing</h1>

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

export default ButtonGlowing;
