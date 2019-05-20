import React from 'react';
import { getMoment, getPartition } from './lazy';

import DateLabel from './DateLabel';
import { LazyTest, Loading } from './components/atoms';

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
      <React.Suspense fallback={<Loading />}>
        <button onClick={this.handleIncrement.bind(this)}>Add Value</button>
        <button onClick={this.handleClick.bind(this)}>Click Me</button>
        <DateLabel value={this.state.date} format="dddd" />
        <pre>
          {JSON.stringify(this.state.partitionedValues, null, 2)}
        </pre>
      </React.Suspense>
    )
  }
}

export default App;
