import './Counter.css';
import React from 'react';
import PropTypes from 'prop-types';
import Controls from './Controls';

export default class Counter extends React.Component {
  static defaultProps = {
    value: 0,
  };
  static propTypes = {
    value: PropTypes.number,
  };
  state = {
    value: this.props.initialValue,
  };

  handleIncrement = event => {
    this.setState(prevState => {
      return { value: prevState.value + 1 };
    });
  };
  handleDecrement = event => {
    this.setState(prevState => ({ value: prevState.value - 1 }));
  };
  render() {
    return (
      <div className="Counter">
        <h1>Counter</h1>
        <span className="Counter__value">{this.state.value}</span>
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}
