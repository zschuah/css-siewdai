import { makeStyles } from "@material-ui/core";
import PreCode, { handleRules } from "common/PreCode";
import { displayProps } from "common/commonProps";
import styled from "styled-components";

const useStyles = makeStyles(displayProps);

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s;
`;

const StyledCaption = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  transition: all 0.5s;
  transform: translateX(-100%);

  h1 {
    text-transform: uppercase;
    margin: 0;
  }
  p {
    font-size: 18px;
    text-transform: capitalize;
  }
`;

const StyledContainer = styled.div`
  width: 500px;
  height: 500px;
  position: relative;
  margin: auto;
  overflow: hidden;

  &:hover ${StyledCaption} {
    background: rgba(0, 0, 0, 0.5);
    transform: translateX(0);
  }
  &:hover ${StyledImage} {
    transform: scale(1.3) rotate(-15deg);
  }

  /* Mobile */
  @media (max-width: 575px) {
    width: 100%;
    height: 300px;
    text-align: center;
    text-wrap: balance;
  }
`;

const ImageEffect2 = () => {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.displayTitle}>Image Effect 2</h1>

      <StyledContainer>
        <StyledImage
          src="https://source.unsplash.com/random/?nature"
          alt="unsplash"
        />
        <StyledCaption>
          <h1>amazing caption!</h1>
          <p>you can write anything you want here!</p>
        </StyledCaption>
      </StyledContainer>

      <div className={classes.codeBox}>
        <PreCode>
          {`
<StyledContainer>
  <StyledImage/>
  <StyledCaption>
    <h1></h1>
    <p></p>
  </StyledCaption>
</StyledContainer>
          `}
        </PreCode>
        <PreCode>
          {".styled-container {" +
            handleRules(StyledContainer) +
            ".styled-caption" +
            handleRules(StyledContainer, 2) +
            ".styled-image" +
            handleRules(StyledContainer, 4) +
            "}"}
        </PreCode>
        <PreCode>{".styled-image {" + handleRules(StyledImage) + "}"}</PreCode>
        <PreCode>
          {".styled-caption {" + handleRules(StyledCaption) + "}"}
        </PreCode>
      </div>
    </div>
  );
};

export default ImageEffect2;
