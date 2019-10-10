import React, { Component } from 'react';
import './CustomizerBody.css';
import MainForm from '../MainForm/MainForm';
import MainSummary from '../MainSummary/MainSummary';

class CustomizerBody extends Component {
  render() {
    return (
      <div className='CustomizerBody'>
        <MainForm
          handleFeatureUpdate={ this.props.handleFeatureUpdate }/>
        <MainSummary />
      </div>
    );
  }
}

export default CustomizerBody;
