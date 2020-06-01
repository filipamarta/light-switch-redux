import React from "react";
import { connect } from "react-redux";
import "./LightContainer.css";

const LightComponent = ({ light, onSwitch }) => {
  return (
    <div className={light === "on" ? "container off" : "container on"}>
      <button className={light === "on" ? "off" : "on"} onClick={onSwitch}>Can you turn <span className={light === "on" ? "off" : "on"} >{light}</span> the 💡?</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { light: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSwitch: () => dispatch({ type: "SWITCH" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LightComponent);
