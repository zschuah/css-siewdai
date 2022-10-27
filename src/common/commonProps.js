export const TRANSITION_TIME = "1s";

export const displayProps = {
  displayTitle: {
    textAlign: "center",
    "@media (max-width: 575px)": {
      fontSize: "1.5rem",
    },
  },
  displayMain: {
    // border: "2px solid green",
    height: "30vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bgDark: {
    background: "#222",
  },
  bgGrey: {
    background: "grey",
  },
  codeBox: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  codeCard: {
    borderRadius: "4px",
    margin: "0 0.2rem",
    fontSize: "0.9rem",
  },
};
