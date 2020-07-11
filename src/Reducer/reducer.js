const reducer = (state = "", action) => {
  console.log(action);

  if (action.type === "CHANGE") {
    return {
      ...state,
      name: action.payload
    };
  }

  return state;
};

export default reducer;
