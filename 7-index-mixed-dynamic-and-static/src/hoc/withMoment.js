import React from 'react';
import { getMoment } from '../lazy';

const withMoment = (WrappedComponent) => class MomentComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      moment: null,
    };
  }

  componentDidMount() {
    this.loadMoment();
  }

  loadMoment() {
    getMoment().then(({ default: moment }) => {
      this.setState({
        loading: false,
        moment
      });
    });
  }

  render() {
    if (this.state.loading) return null;

    return <WrappedComponent moment={this.state.moment} {...this.props} />
  }
}

export default withMoment;
