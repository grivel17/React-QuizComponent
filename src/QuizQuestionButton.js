import React, { Component } from "react";

class QuizQuestionButton extends Component {

  handelClick() {

  }
  render() {
    return (
      <li>
        <button onClick={this.handelClick.bind(this)}>{this.props.button_text}</button>
      </li>
    );
  }
}

export default QuizQuestionButton;
