import React from 'react';

import {
  Text,
  View,
  TouchableHighLight,
  TextInput,
} from 'react-native';

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
        <Text>Hello</Text>
      </View>
    )
  }
}