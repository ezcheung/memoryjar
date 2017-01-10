import React from 'react';

import {
  View,
  Text,
  TouchableHighlight,
  TextInput,
} from 'react-native';

export default class InputPage extends React.Component {

  constructor() {
    super();
    this.state = {
      newMemory : ""
    }
  }

  render() {
    return ( 
      <View style="form">
        <TextInput value={this.state.newMemory} onChangeText={this.handleInput.bind(this)}/>
        <TouchableHighlight onPress={this.submitMemory.bind(this)}>
          <Text>Store</Text>
        </TouchableHighlight>
      </View>
    )
  }

  handleInput(text) {
    this.setState({newMemory : text});
  }

  submitMemory() {
    this.setState({newMemory : ""});
  }
}