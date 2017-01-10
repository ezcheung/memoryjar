import React from 'react';

import {
  Text,
  View,
  TouchableHighLight,
  TextInput,
} from 'react-native';

import InputPage from './inputPage';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      viewing : false
    }
  }
  render() {
    return (
      <View>
        <InputPage/>
      </View>
    )
  }
}