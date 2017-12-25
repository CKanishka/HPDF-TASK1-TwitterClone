import React, { Component } from 'react';
import {Text,View} from 'react-native';
import {Footer,FooterTab,Button,Icon,Left,Body,Right,Title} from 'native-base';

export default class Appfooter extends Component {
  render() {
    return (
      
        <Footer>
          <FooterTab style={{backgroundColor:'white'}} >
		  <Button>
              <Text style={{fontWeight:'bold',fontSize:16, color: 'deepskyblue'}}>All</Text>
            </Button>
            <Button>
              <Text style={{fontWeight:'bold',fontSize:16, color: 'lightgray'}}>Mentions</Text>
            </Button>
         


            <Right>
            <Button transparent style={{backgroundColor:'white'}} >
              <Icon name="settings" style={{color:'deepskyblue'}} />
            </Button>
			</Right>
          </FooterTab>
        </Footer>


       
    );
  }
}
module.export = Appfooter;