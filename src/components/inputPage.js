import React from 'react';

import {
  View,
  Text,
  TouchableHighlight,
  TextInput,
  AsyncStorage
} from 'react-native';

import {Styles} from './../styles/styles';

export default class InputPage extends React.Component {

  constructor() {
    super();
    this.state = {
      newMemory : ""
    }
  }

  render() {
    return ( 
      <View style={Styles.container}>
        <TextInput value={this.state.newMemory} onChangeText={this.handleInput.bind(this)}/>
        <TouchableHighlight onPress={this.submitMemory.bind(this)}>
          <Text>Store Memory</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.toggleView}>
          <Text>See Memories</Text>
        </TouchableHighlight>
      </View>
    )
  }

  handleInput(text) {
    this.setState({newMemory : text});
  }

  submitMemory() {
    AsyncStorage.getItem('memories')
    .then(memories => {
      let memArray = memories ? JSON.parse(memories) : [];
      memArray.push(this.state.newMemory);
      return AsyncStorage.setItem('memories', JSON.stringify(memArray))
      .then((resp) => {this.setState({newMemory : ""})}) //clear if set goes through
      .catch(err => {console.error(err)});
    })
    .catch(err => {console.error(err)});
  }
}