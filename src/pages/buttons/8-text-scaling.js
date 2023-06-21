import { makeStyles } from "@material-ui/core";
import PreCode, { handleRules } from "common/PreCode";
import { displayProps } from "common/commonProps";
import styled from "styled-components";

const useStyles = makeStyles(displayProps);

const Styled1 = styled.button`
  cursor: pointer;
  background: transparent;
  color: #262626;
  font-size: 40px;
  border: 4px solid #262626;
  padding: 40px 80px;
  transition: all 0.5s;
  position: relative;
  /* Contain HUGE button */
  overflow: hidden;
`;

const Styled2 = styled(Styled1)`
  &::before {
    content: "Hover Me";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #262626;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    /* Make HUGE and INVISIBLE */
    transform: scale(5);
    opacity: 0;
    transition: all 0.5s;
  }
  &:hover::before {
    transform: scale(1);
    opacity: 1;
  }
`;

const StyledFinal = styled(Styled2)`
  /* Mobile */
  @media (max-width: 575px) {
    font-size: 20px;
    padding: 20px 40px;
  }
`;

const TextScaling = () => {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.displayTitle}>Text Scaling</h1>

      <div className={classes.displayMain}>
        <StyledFinal>Hover Me</StyledFinal>
      </div>

      <div className={classes.codeBox}>
        <PreCode>{handleRules(Styled1)}</PreCode>
        <PreCode>{handleRules(Styled2)}</PreCode>
      </div>
    </div>
  );
};

export default TextScaling;
