import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { counters, onReset, onIncrement, onDelete } = this.props;

    return (
      <div className="m-3">
        <button className="btn btn-primary btn-sm-m-2" onClick={onReset}>
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            handleIncrement={onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
