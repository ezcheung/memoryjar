import React from 'react';

import {
  Text,
  View,
  TouchableHighLight,
  TextInput,
} from 'react-native';

import InputPage from './inputPage';
import MemoryList from './memoryList';
import Styles from './../styles/styles.js';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      viewing : false
    }
  }

  toggleView() {
    this.setState({viewing: !this.state.viewing});
  }

  page() {
    return this.state.viewing ? 
    <MemoryList toggleView={this.toggleView.bind(this)}/> : 
    <InputPage toggleView={this.toggleView.bind(this)}/>
  }

  render() {
    return (
      <View style={Styles.app}>
        {this.page()}
      </View>
    )
  }
}