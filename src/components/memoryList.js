import React from 'react';

import {
  Text,
  View,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';

import Memory from './memory';
import Spinner from 'react-native-loading-spinner-overlay';

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
      if(!memories) memories = [];
      this.setState({fetching : false, memories: JSON.parse(memories)});
    })
    .catch(err => {
      console.error(err);
      this.props.toggleView();
    })
  }

  list() {
    return (
      this.state.memories.map((mem, i) => <Memory key={i} mem={mem}/>)
      )
  }

  render() {
    if (this.state.fetching) {
      return (
        <View>
          <Spinner visible="true" textContext={{"Thinking back..."}}/>
        </View>
      );
    }
    return (
      <View>
        {this.list()}
      </View>
      )
  }
}