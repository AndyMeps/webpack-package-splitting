import React from 'react';
import { utc } from 'moment';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: 'Not Set'
    };
  }

  handleClick() {
    this.setState({
      date: utc().format(),
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
