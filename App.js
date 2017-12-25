/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


import {Container} from 'native-base'

import Appheader from './components/appheader';
import Appfooter from './components/appfooter';
import Appbody from './components/appbody';



export default class App extends Component {
  render() {
    return (
      <Container>
        
		<Appbody/>
		
		
		</Container>	
        
    );
  }
}

