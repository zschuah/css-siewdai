import { makeStyles } from "@material-ui/core";
import PreCode, { handleRules } from "common/PreCode";
import { displayProps } from "common/commonProps";
import styled from "styled-components";

const useStyles = makeStyles(displayProps);

const Styled1 = styled.button`
  cursor: pointer;
  background: #262626;
  font-size: 40px;
  border: 4px solid #262626;
  padding: 40px 80px;
  position: relative;
  /* Hide original text */
  color: transparent;
  overflow: hidden;
`;

const Styled2 = styled(Styled1)`
  &::before {
    content: "Hover Me";
    position: absolute;
    inset: 0;
    background: #fffa65;
    color: #262626;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
  }
  &::after {
    content: "Hover Me";
    position: absolute;
    inset: 0;
    background: #fffa65;
    color: #262626;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
    /* Start from BOTTOM LEFT */
    transform: translate(-100%, 100%);
  }
`;

const Styled3 = styled(Styled2)`
  &:hover::before {
    /* Moves to TOP RIGHT */
    transform: translate(100%, -100%);
  }
  &:hover::after {
    /* Moves to original position */
    transform: translate(0, 0);
  }
`;

const StyledFinal = styled(Styled3)`
  /* Mobile */
  @media (max-width: 575px) {
    font-size: 20px;
    padding: 20px 40px;
  }
`;

const TwoLayersSwapping = () => {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.displayTitle}>Two Layers Swapping</h1>

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

export default TwoLayersSwapping;
