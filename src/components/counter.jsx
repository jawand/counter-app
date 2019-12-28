import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.handleIncrement({ id: 1 })}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete({ counterId: this.props.id })}
        >
          Delete
        </button>
      </div>
    );
  }

  handleIncrement = product => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    return (classes += this.state.value === 0 ? "warning" : "primary");
  }

  formatCount() {
    const { value: count } = this.state;
    return count == 0 ? "Zero" : count;
  }
}

export default Counter;
