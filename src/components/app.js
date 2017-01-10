import React from 'react';

import {
  Text,
  View,
  TouchableHighLight,
  TextInput,
} from 'react-native';

import InputPage from './inputPage';
import memoryList from './memoryList';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      viewing : false
    }
  }

  toggleView() {
    this.state.viewing = !this.state.viewing;
  }

  page() {
    return this.state.viewing ? <MemoryList/> : <InputPage/>
  }

  render() {
    return (
      <View>
        {this.page()}
      </View>
    )
  }
}