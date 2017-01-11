import React from 'react';

import {
  View,
  Text,
} from 'react-native';

export default class Memory extends React.Component() {

  constructor() {
    super();
  }

  render() {
    return (
      <View>
        <Text>{this.props.mem}</Text>
      </View>
    )
  }
}