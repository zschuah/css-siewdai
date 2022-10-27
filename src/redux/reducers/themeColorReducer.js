const themeColorReducer = (state = "purple", action) => {
  switch (action.type) {
    case "SET_THEME_COLOR":
      return action.payload;
    default:
      return state;
  }
};

export default themeColorReducer;
