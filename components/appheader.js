import React, { Component } from 'react';
import {Text,View} from 'react-native';
import {Header,Left,Button,Icon,Title,Body,Right,Thumbnail} from 'native-base';


export default class Appheader extends Component {
  render() {
    return (
      
        <Header style={{backgroundColor:'white'}} >
            <Button transparent>
             <Thumbnail source={require('../img/pp1.jpg')} />
			  
            </Button>
          
		  
          <Body>
           <Title style={{color:'black'}} >  Home</Title>
          </Body>
          
        </Header>


       
    );
  }
}
module.export = Appheader;