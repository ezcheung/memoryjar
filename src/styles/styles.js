import React from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';

const {width, height} = Dimensions.get('window');


const Styles = StyleSheet.create({
  memory : {
    borderBottomColor : 'rgba(0, 0, 0, 0.65)',
    borderBottomWidth : 1,
    padding : 10
  },
  nav : {
    padding : 10
  },
  app : {
    backgroundColor : 'rgba(0, 0, 0, 0.04)',
    flex : 1,
  },
  inputPage : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center'
  },
  inputBox : {
    width : width * 0.9,
    padding : 10,
    borderWidth : 1,
    borderRadius : 10,
    borderColor : 'rgba(0, 0, 0, 0.3)'
  }
});

export default Styles;