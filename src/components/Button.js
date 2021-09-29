import React from "react";
import ColorContext from "../context/ColorContext";
import LanguageContext from "../context/LanguageContext";

class Button extends React.Component {
  renderSubmit(value) {
    return value === "english" ? "Submit" : "Qebul Et";
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {(value) => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

// Button.contextType = LanguageContext;

export default Button;
