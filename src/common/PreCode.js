import styled from "styled-components";

export const handleRules = (styled) => {
  return styled.componentStyle.rules[0];
};

const StyledCode = styled.code`
  border-radius: 4px;
  margin: 0 0.25rem;
  font-size: 0.9rem;
  max-width: 85vw;
  overflow-x: scroll;
`;

const PreCode = ({ children }) => {
  return (
    <pre>
      <StyledCode>{children}</StyledCode>
    </pre>
  );
};

export default PreCode;
