import React,  { Component } from 'react';

import {
  StatusBar,
  StyleSheet,
  ListView,
  Image,
  Dimensions,
  TouchableOpacity,
  Text,
  DrawerLayoutAndroid,
  TextInput,
  View,
} from 'react-native';

import styles from './chatStyles.js';

class ChatScreen extends React.Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      text: '',
      selectedTab: 2,
      dataSource: ds.cloneWithRows([
            { "name": "Autolinee Toscane", "status": "online", "location": "Fl, Toscana" },
            { "name": "Greenline Tour", "status": "offline", "location": "RM, Lazio"},
            { "name": "EuroLines", "status": "offline", "location": "MI.Lombardia" },
            { "name": "Ias Autolienee", "status": "online", "location": "CS, Calabria" },
            { "name": "Trotta", "status": "online", "location": "RM,Lazio" },
            { "name": "RealiTour", "status": "online", "location": "RM,Lazio" }
        ]),
    };
  }


  handleButtonPress = (tabNumber) => {
    this.setState({ selectedTab: tabNumber});
  }

  handleBackPress = () => {
    const navigator = this.props.navigator;
    navigator.pop();
  }

  openDrawer = () => {
    this.refs.drawer.openDrawer();
  }

  render() {
    const {height, width} = Dimensions.get('window');
    const handleTab1 = this.handleButtonPress.bind(this, 1);
    const handleTab2 = this.handleButtonPress.bind(this, 2);
    const handleTab3 = this.handleButtonPress.bind(this, 3);
    const handleBack = this.handleBackPress.bind(this);
    const openDrawer = this.openDrawer.bind(this);
    const navigationView = (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Side Menu</Text>
        </View>
    );
    return (
      <DrawerLayoutAndroid
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        drawerWidth={width/1.3}
        ref={'drawer'}
        renderNavigationView={() => navigationView}
        renderHeader={() => <Header />}
      >
        <View style={styles.container}>
          <View
            style={styles.titleBar}
          >
            <TouchableOpacity
              style={{alignItems:'flex-start', alignItems: 'center',
              justifyContent: 'center', paddingLeft:30}}
              onPress={openDrawer}
            >
            <Image style={styles.logo} source={require('./assets/menu.png')}/>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex:1, alignItems: 'center',
              justifyContent: 'center'}}
            >
            <Text style={styles.menuText}>Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{alignItems:'flex-end', alignItems: 'center',
              justifyContent: 'center', paddingRight:30}}
              onPress={handleBack}
            >
            <Image style={styles.logo} source={require('./assets/nav.png')}/>
            </TouchableOpacity>
          </View>
          <View style={styles.setWidth}>
            <View style={styles.tabWidth}>
              <View style={styles.tabView}>
                <View
                  style={styles.tabContainer}
                >
                  <TouchableOpacity
                    style={this.state.selectedTab === 1 ? styles.active : styles.inactive}
                    onPress={handleTab1}
                  >
                        <Text style={this.state.selectedTab === 1 ? styles.activeText : styles.inactiveText}>MESSAGI</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={this.state.selectedTab === 2 ? styles.active : styles.inactive}
                    onPress={handleTab2}
                  >
                  <Text style={this.state.selectedTab === 2 ? styles.activeText : styles.inactiveText}>RUBRICA</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={this.state.selectedTab === 3 ? styles.active : styles.inactive}
                    onPress={handleTab3}
                  >
                  <Text style={this.state.selectedTab === 3 ? styles.activeText : styles.inactiveText}>NUOVO</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {
              this.state.selectedTab === 1
              ?
                <View style={styles.container}>
                 <Text>Content of Messagi View</Text>
                </View>
              :
                <View />
            }
            {
              this.state.selectedTab === 2
              ?
              <View style={styles.container}>
              <View style={{flexDirection: 'row',backgroundColor: '#E0E0E0', paddingTop:20, marginTop:-height/52,paddingBottom:20, paddingLeft:20, paddingRight:20}}>
            		<View style={{flex: 0.1, backgroundColor: 'white',paddingLeft:10, paddingTop:14}}>
                  <Image style={styles.search} source={require('./assets/search.png')}/>
                </View>
                <View style={{backgroundColor: 'white',flex: 0.9, paddingTop:10,paddingBottom:10}}>
                 <TextInput
              		style={{height: 40, backgroundColor: 'white'}}
                  underlineColorAndroid="white"
              		onChangeText={(text) => this.setState({text})}
                  placeholder="cerca associato"
              		value={this.state.text}
            		 />
                </View>
              </View>
              <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData,index) => <TouchableOpacity style={styles.searchButton} >
                <View style={{flexDirection: 'row', height: 100, padding: 20}}>
                  <View style={{flex: 0.2, flexDirection: 'row'}}>
                    <View style={{flex: 0.1}}>
                    <Image
                    style={{width: 50, height: 50, borderRadius: 25, borderColor:'white', borderWidth:1}}
                    source={require('./assets/profile.jpg')}
                    >
                    </Image>
                    </View>
                    <View style={{flex:0.1, paddingTop:10, paddingRight:50}}>
                      <View style={rowData.status==='online'?styles.onLine:styles.offLine}>
                      </View>
                    </View>
                  </View>
                <View style={{flex: 0.8, paddingLeft:10}}>
                  <Text style={styles.mainTitle}>{rowData.name}</Text>
                  <Text style={styles.subTitle}>{rowData.location}</Text>
                </View>
                </View>
                </TouchableOpacity>}
              />
              </View>
              :
                <View />
            }
            {
              this.state.selectedTab === 3
              ?
              <View style={styles.container}>
               <Text>Content of Nuovo View</Text>
              </View>
              :
                <View />
            }
          </View>
        </View>
      </DrawerLayoutAndroid>
    );
  }
}



module.exports = ChatScreen;
