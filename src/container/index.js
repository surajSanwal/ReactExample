import React, { Component } from 'react';
import {Button} from '@material-ui/core';
import logo from '../logo.svg';
import '../App.css';

class Home extends Component {
  render() {
    return (
        <Button variant="contained" color="primary">
        Hello World
      </Button>)
  }
}

export default Home;
