import React from 'react';

import {
  View,
  Text,
} from 'react-native';

import {Styles} from './../styles/styles.js';

export default class Memory extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <View style={Styles.memory}>
        <Text>{this.props.mem}</Text>
      </View>
    )
  }
}