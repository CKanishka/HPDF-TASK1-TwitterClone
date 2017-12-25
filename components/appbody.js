import React, { Component } from 'react';
import {StyleSheet,Text,View,Image} from 'react-native';
import {Input,Item,Title,Content,Card,CardItem,Body,Left,Thumbnail,Button,Right,Container,Header,Tab,Tabs,TabHeading,Spinner,Fab,Drawer,Footer,FooterTab} from 'native-base';
import SideBar from '../components/drawerbody';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StackNavigator} from 'react-navigation';

import Searchtab from '../components/tab';



export default class Appbody extends Component {

	constructor(props) {
  super(props);

  this.state = {
    buttonColor: 'white', // default button color goes here
  };
}

onButtonPress= () => {
  this.setState({ buttonColor: 'deepskyblue' }); 
}
	

	closeDrawer(){
      this._drawer._root.close()
    }
    openDrawer(){
      this._drawer._root.open()
    }

  render() {
  
    return (
	    
	    
		<Drawer
        ref={(ref) => { this._drawer = ref; }}
        content={<SideBar navigator={this._navigator} />}
        onClose={() => this.closeDrawer()} >

		<Container>
		
        <Tabs tabBarUnderlineStyle={{backgroundColor:'deepskyblue'}}>
          <Tab heading={ <TabHeading style={{backgroundColor:'white'}} ><Icon name="home-outline" style={{fontSize:30}}  /></TabHeading>}>
		  
		<Header hasTabs style={{backgroundColor:'white'}} >
            <Button transparent>
             <Thumbnail source={require('../img/pp1.jpg')} />
			</Button>
             <Body>
           <Title style={{color:'black',fontWeight:'bold'}} >  Home</Title>
          </Body>
         </Header>
		 <Fab 
			style={{ backgroundColor: 'deepskyblue' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="feather" />
            
        </Fab>
		
		<Content >
        <Card>
            <CardItem >
              <Left>
                <Thumbnail source={require('../img/nb.png')} />
                <Body>
                  <Text style={{fontWeight: 'bold',fontSize:18, color: 'black'}}>NativeBase<Icon active name="approval" style={{fontSize:18, color: 'deepskyblue'}}/><Text style={{fontSize:16, fontWeight: 'normal', color: 'lightgray'}}>@apprev..-33min  <Icon active name="chevron-down" style={{fontSize:18, color: 'gray'}}/></Text></Text>
                  <Text style={{ color: 'black'}} note>Making app building simpler and faster than ever before. <Text style={{ color: 'skyblue'}}> nbrn123/nb.com </Text> </Text>
                </Body>
				</Left>
				
				
            </CardItem>
            <CardItem cardBody>
             <Image source={require('../img/nb1.jpg')} style={{marginLeft:80,height: 200, width: null, flex: 1}}  />
			 </CardItem>
            <CardItem style={{marginLeft:65}} >
              <Left>
                <Button transparent>
                  <Icon name="comment-outline" size={25}  />
                  <Text>12 </Text>
                </Button>
              </Left>
              
                <Button transparent>
                  <Icon name="twitter-retweet" size={27} />
                  <Text>3         </Text>
                </Button>
              
			  <Button transparent>
                  <Icon name="heart-outline" size={25} />
                  <Text>15 </Text>
                </Button>
              <Right>
                <Button transparent>
                  <Icon name="email-outline" size={25}/>
                  <Text> </Text>
                </Button>
              </Right>
            </CardItem>
          </Card>


		  <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../img/pg.jpg')} />
                <Body>
                  <Text style={{fontWeight: 'bold',fontSize:18, color: 'black'}}>Jo'sLens<Icon active name="approval" style={{fontSize:18, color: 'deepskyblue'}}/><Text style={{fontSize:16, fontWeight: 'normal', color: 'lightgray'}}>@photocent -20min  <Icon active name="chevron-down" style={{fontSize:18, color: 'gray'}}/></Text></Text>
                  <Text style={{ color: 'black'}} note>In photography there is a reality so subtle that it becomes more real than reality.-Alfred <Text style={{ color: 'skyblue'}}> #quoteforphotography </Text> </Text>
                </Body>
				</Left>
			</CardItem>

			

            <CardItem cardBody>
             <Image source={require('../img/pg1.jpg')} style={{marginLeft:80,height: 200, width: null, flex: 1}}  />
			 </CardItem>
            <CardItem style={{marginLeft:65}} >
              <Left>
                <Button transparent>
                  <Icon name="comment-outline" size={25}  />
                  <Text>165 </Text>
                </Button>
              </Left>
              
                <Button transparent>
                  <Icon name="twitter-retweet" size={27} />
                  <Text>57         </Text>
                </Button>
              
			  <Button transparent>
                  <Icon name="heart-outline" size={25} />
                  <Text>1500 </Text>
                </Button>
              <Right>
                <Button transparent>
                  <Icon name="email-outline" size={25}/>
                  <Text> </Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
		  
		  </Content>


		 </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor:'white'}} ><Icon name="account-search" size={30}/></TabHeading>}>
          <Header searchBar style={{backgroundColor:'white'}}>
          <Item>
            <Icon name="arrow-left" style={{color:'deepskyblue',fontSize:20}} />
            <Input placeholder="Search Twitter" />
            
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
		</Tab>
          
		  <Tab heading={ <TabHeading style={{backgroundColor:'white'}} ><Icon name="bell-outline" size={30}/></TabHeading>}>
         <Text style={{fontWeight: 'bold',fontSize:25, color: 'black'}}>UNDER CONSTRUCTION</Text>
		 </Tab>
		  <Tab heading={ <TabHeading style={{backgroundColor:'white'}} ><Icon name="email-outline" size={30}/></TabHeading>}>
          <Text style={{fontWeight: 'bold',fontSize:25, color: 'black'}}>UNDER CONSTRUCTION</Text>
		  </Tab>
        </Tabs>
		


		<Footer>
          <FooterTab style={{backgroundColor:'white'}} >
		  <Button Color={this.state.buttonColor}
					onPress={this.onButtonPress}>
              <Text style={{fontWeight:'bold',fontSize:16}}>All</Text>
            </Button>
            <Button Color={this.state.buttonColor}
					onPress={this.onButtonPress}>
              <Text style={{fontWeight:'bold',fontSize:16}}>Mentions</Text>
            </Button>
         


            <Right>
            <Button transparent style={{backgroundColor:'white'}} >
              <Icon name="settings" style={{color:'deepskyblue',fontSize:25}} />
            </Button>
			</Right>
          </FooterTab>
        </Footer>

          </Container>
	  
            </Drawer>
      
	
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





module.export = Appbody;