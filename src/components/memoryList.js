import React from 'react';

import {
  Text,
  View,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';

import Memory from './memory';

export default class MemoryList extends React.Component() {

  constructor() {
    super();
    this.state = {
      fetching : true,
      memories : []
    }
  }

  componentWillMount() {
    AsyncStorage.getItem('memories')
    .then(memories => {
      this.setState({fetching : false, memories: memories});
    })
    .catch(err => {
      console.error(err);
      this.props.toggleView();
    })
  }

  render() {

  }
}