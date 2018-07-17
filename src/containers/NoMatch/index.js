// @flow

import React, { Component } from 'react';
import { history } from '../../state/store';

class NoMatch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleGoBack = this.handleGoBack.bind(this);
  }

  handleGoBack() {
    history.goBack();
  }

  render() {
    return (
      <div>
        <div onClick={this.handleGoBack}>Go Back</div>
      </div>
    );
  }
}

export default NoMatch;
