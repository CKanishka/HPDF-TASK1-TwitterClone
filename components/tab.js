import React, { Component } from 'react';
import {Text,View} from 'react-native';
import {Header,Left,Button,Icon,Title,Body,Right,Thumbnail,Item,Input} from 'native-base';


export default class Searchtab extends Component {
     
  render() {
    return (
      
        <Header searchBar rounded>
          <Item>
            <Icon name="arrow-left" style={{color:'deepskyblue',fontSize:20}} />
            <Input placeholder="Search Twitter" />
            
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>


       
    );
  }
}
module.export = Searchtab;