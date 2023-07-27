import { makeStyles } from "@material-ui/core";
import PreCode, { handleRules } from "common/PreCode";
import { displayProps } from "common/commonProps";
import styled from "styled-components";

const useStyles = makeStyles(displayProps);

const Styled1 = styled.button`
  cursor: pointer;
  background: #c47135;
  border: none;
  padding: 12px 40px;
  color: white;
  font-size: 22px;
  text-transform: uppercase;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    top: -5px;
    left: -5px;
    border-top: 2px solid #c47135;
    border-left: 2px solid #c47135;
    transition: all 0.25s;
  }
  &:hover::before {
    height: 100%;
    width: 100%;
  }
`;

const StyledFinal = styled(Styled1)`
  &::after {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    /* change top to bottom */
    bottom: -5px;
    /* change left to right */
    right: -5px;
    border-bottom: 2px solid #c47135;
    border-right: 2px solid #c47135;
    transition: all 0.25s;
  }
  &:hover::after {
    height: 100%;
    width: 100%;
  }
`;

const BorderGrowing = () => {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.displayTitle}>Border Growing</h1>

      <div className={`${classes.displayMain} ${classes.bgDark}`}>
        <StyledFinal>Submit</StyledFinal>
      </div>

      <div className={classes.codeBox}>
        <PreCode>{handleRules(Styled1)}</PreCode>
        <PreCode>{handleRules(StyledFinal)}</PreCode>
      </div>
    </div>
  );
};

export default BorderGrowing;
