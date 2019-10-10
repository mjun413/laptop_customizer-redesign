import React, { Component } from 'react';
import './MainForm.css';
import FeatureOptions from '../FeatureOptions/FeatureOptions';

class MainForm extends Component {
  render() {
    return (
      <form className='main_form'>
        <h2>Customize your laptop</h2>
        <FeatureOptions />
      </form>
    );
  }
}

export default MainForm;
