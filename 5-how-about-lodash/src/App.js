import React from 'react';
import { getMoment, getPartition } from './lazy';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: 'Not Set',
      currentValue: 0,
      valueArray: [],
      partitionedValues: [],
    };
  }

  handleClick() {
    getMoment().then((moment) => {
      this.setState({
        date: moment.utc().format(),
      });
    });
  }

  handleIncrement() {
    getPartition().then(({ default: partition }) => {
      this.setState((prevState) => {
        const nextValue = prevState.currentValue + 1;
        const nextArray = [...prevState.valueArray, nextValue];

        return {
          currentValue: nextValue,
          valueArray: nextArray,
          partitionedValues: partition(nextArray, n => n % 2),
        };
      })
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleIncrement.bind(this)}>Add Value</button>
        <button onClick={this.handleClick.bind(this)}>Click Me</button>
        {this.state.date}
        <pre>
          {JSON.stringify(this.state.partitionedValues, null, 2)}
        </pre>
      </div>
    )
  }
}

export default App;
