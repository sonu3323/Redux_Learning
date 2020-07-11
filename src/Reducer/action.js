// const action = (name, type) => {
//   return { type: type, payload: name };
// };

// export default action;

//Asychrouts action fetching data from server

const action = (name, type) => {
  return dispatch => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => dispatch({ type: type, payload: data[0].name }));
  };
};

//Wish Async and await ****

// const action = (name, type) => {
//   return async dispatch => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await res.json();
//     dispatch({ type: type, payload: data[0].name });
//   };
// };

export default action;
