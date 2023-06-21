import { makeStyles } from "@material-ui/core";
import PreCode, { handleRules } from "common/PreCode";
import { displayProps } from "common/commonProps";
import styled from "styled-components";

const useStyles = makeStyles(displayProps);

const Styled1 = styled.button`
  cursor: pointer;
  background: transparent;
  border: 4px solid tomato;
  color: tomato;
  padding: 20px 40px;
  font-size: 25px;
  text-transform: uppercase;
  transition: all 0.5s;
  position: relative;
  overflow: hidden;
  &:hover {
    color: white;
  }
`;

const Styled2 = styled(Styled1)`
  &::before {
    content: "";
    position: absolute;
    /* Alt: bottom 0 */
    top: 0;
    left: 0;
    width: 100%;
    background: tomato;
    z-index: -1;
    /* Alt: 50% 50% 0 0 */
    border-radius: 0 0 50% 50%;
    height: 0;
    transition: all 0.5s;
  }
  &:hover::before {
    height: 190%;
  }
`;

const StyledFinal = styled(Styled2)`
  /* Mobile */
  @media (max-width: 575px) {
    font-size: 20px;
    padding: 20px 40px;
  }
`;

const CircularSwapping = () => {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.displayTitle}>Circular Swapping</h1>

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

export default CircularSwapping;
