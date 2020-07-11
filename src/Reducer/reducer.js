const isState = {
  name: "manish",
  wishes: ["hello", "dello", "mennu"]
};

const reducer = (state = isState, action) => {
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
