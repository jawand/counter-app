import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {}

  // This method is called just before a component is removed from virtual DOM.
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => this.props.handleIncrement(this.props.counter)}
          >
            +
          </button>
          <button
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
            onClick={() => this.props.handleDecrement(this.props.counter)}
          >
            -
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() =>
              this.props.onDelete({ counterId: this.props.counter.id })
            }
          >
            X
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    return (classes += this.props.counter.value === 0 ? "warning" : "primary");
  }

  formatCount() {
    const value = this.props.counter.value;
    return value == 0 ? "Zero" : value;
  }
}

export default Counter;
