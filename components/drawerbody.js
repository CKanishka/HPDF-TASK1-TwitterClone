import React, { Component } from 'react';
import {StyleSheet,Text,View,Image} from 'react-native';
import {Header,Thumbnail,Footer,FooterTab,Content,Card,CardItem,Body,Left,Button,Right,Container,Tab,Tabs,TabHeading,} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default class Appdrawer extends Component {


  render() {
    return (
		<Container>
        <Content style={{backgroundColor:'white',paddingLeft:25}}>
          
		
          <Thumbnail source={require('../img/pp1.jpg')} />
         
		 <Text style={{fontWeight: 'bold',fontSize:20, color: 'black'}}>Tim Cook                            <Icon active name="chevron-down" style={{fontSize:20, color: 'deepskyblue'}}/> </Text>  
          <Text style={{fontSize:18, fontWeight: 'bold', color: 'lightgray'}}>@tim_cook </Text>   
          <Text>  </Text>
		  <Text style={{fontWeight: 'bold',fontSize:18, color: 'black'}}>3k <Text style={{fontSize:16, fontWeight: 'normal', color: 'darkgray'}}>Following   		  <Text style={{fontWeight: 'bold',fontSize:18, color: 'black'}}>90m <Text style={{fontSize:16, fontWeight: 'normal', color: 'darkgray'}}>Followers</Text></Text>
</Text></Text>
			
          <Text>  </Text>

		  <Text style={{fontWeight: 'normal',fontSize:20, color: 'black'}}><Icon active name="account-outline" style={{fontSize:25, color: 'gray'}}/>   Profile </Text>
		  <Text>  </Text>
          <Text style={{fontWeight: 'normal',fontSize:20, color: 'black'}}><Icon active name="view-list" style={{fontSize:25, color: 'gray'}}/>   Lists </Text>
          <Text>  </Text>
		  <Text style={{fontWeight: 'normal',fontSize:20, color: 'black'}}><Icon active name="flash-outline" style={{fontSize:25, color: 'gray'}}/>   Moments </Text>
		  <Text>  </Text>
          <Text style={{fontWeight: 'normal',fontSize:20, color: 'black'}}><Icon active name="vector-arrange-below" style={{fontSize:25, color: 'gray'}}/>   Highlights </Text>
		  <Text>  </Text>
		  <Text>  </Text>


		  <Text style={{fontWeight: 'normal',fontSize:20, color: 'black'}}>Settings and Privacy </Text>
		  <Text>  </Text>
		 <Text style={{fontWeight: 'normal',fontSize:20, color: 'black'}}>Help Centre </Text>

		 </Content>



		<Footer>
          <FooterTab style={{backgroundColor:'white'}} >
		 <Left>
		 <Button transparent style={{backgroundColor:'white'}} >
              <Icon name="weather-night" style={{color:'deepskyblue',fontSize:25}} />
         </Button>
         </Left>  
		 <Right>
         <Button transparent style={{backgroundColor:'white'}} >
              <Icon name="qrcode" style={{color:'deepskyblue',fontSize:25}} />
         </Button>
	     </Right>
          </FooterTab>
        </Footer>





		  
      </Container>
	  
        
      
		
			);
  }
}
const styles = StyleSheet.create({
  bodyText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
  
});

module.export = Appdrawer;