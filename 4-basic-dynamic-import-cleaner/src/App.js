import React from 'react';
import { getMoment } from './lazy';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: 'Not Set'
    };
  }

  handleClick() {
    getMoment((moment) => {
      this.setState({
        date: moment.utc().format(),
      });
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>Click Me</button>
        {this.state.date}
      </div>
    )
  }
}

export default App;
