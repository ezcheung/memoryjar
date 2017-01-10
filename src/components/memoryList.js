import React from 'react';

import {
  Text,
  View,
  TouchableOpacity
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

  render() {

  }
}