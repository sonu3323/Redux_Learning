import React, { useState } from "react";
import "./styles.css";
import { connect } from "react-redux";
import action from "./Reducer/action";

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <h1> The Name is {props.name}</h1>
      {/* {props.wishes.map(item => {
        return <p>{item}</p>;
      })} */}
      <button onClick={() => props.onchange("Devender")}> Click me</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    name: state.name,
    wishes: state.wishes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onchange: name => {
      dispatch(action(name, "CHANGE"));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
