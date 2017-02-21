import React,  { Component } from 'react';

import {
  StatusBar,
  Dimensions,
  StyleSheet,
  Image,
  ListView,
  DrawerLayoutAndroid,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

const {height, width} = Dimensions.get('window');
const imageArray = [require('./assets/bus1.jpg'), require('./assets/bus2.jpg'), require('./assets/bus3.jpg'), require('./assets/bus4.jpeg'), require('./assets/bus5.jpg')];


class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {imageUrl: imageArray[0], count:0,
      dataSource: ds.cloneWithRows(['Lorel ipsum dolor sit consecuter adipiscing elit,sed do eiusmod tempor', 'lorel ipsum dolor sit consecuter adipiscing elit,sed do eiusmod tempor', 'lorel ipsum dolor sit consecuter adipiscing elit,sed do eiusmod tempor', 'lorel ipsum dolor sit consecuter adipiscing elit,sed do eiusmod tempor', 'lorel ipsum dolor sit  consecuter adipiscing elit,sed do eiusmod tempor', 'lorel ipsum dolor sit consecuter adipiscing elit,sed do eiusmod tempor']),
    };
  }

  componentDidMount(){
    setInterval(this.slider.bind(this), 1500);
  }

  openDrawer = () => {
    this.refs.drawer.openDrawer();
  }

  slider(){
    if(this.state.count===4){
       this.setState({count:0});
    }else{
      this.setState({count:this.state.count+1});
    }
    this.setState({imageUrl: imageArray[this.state.count]});
  }

  render() {
    const Footer = (props) => (
          <View style={styles.container}>
            <TouchableOpacity style={styles.footerButton}>
              <Text style={styles.textFooter}>VEDI TUTTE LE NEWS</Text>
            </TouchableOpacity>
          </View>
   );
   const navigationView = (
         <View style={styles.drawer}>
          <Text style={styles.drawerMenu}>Side Menu</Text>
         </View>
   );
    return (
            <DrawerLayoutAndroid
             ref={'drawer'}
             drawerWidth={300}
             drawerPosition={DrawerLayoutAndroid.positions.Left}
             renderNavigationView={() => navigationView}>
              <View style={styles.container}>
                <View style={styles.sliderView}>
            		  <Image style={styles.sliderImage} source={this.state.imageUrl}>
                    <View style={styles.sliderButtonView}>
                     <TouchableOpacity style={styles.sliderButton}>
                        <Text style={styles.sliderButtonText}>IN EVIDENZA</Text>
                     </TouchableOpacity>
                     <Text style={styles.sliderText}>lorel ipsum dolor sit amet, consecuter adipiscing elit,sed do eiusmod tempor
                     </Text>
                    </View>
                    <View style={styles.sliderIndicator}>
                      <View style={this.state.count===0?styles.active:styles.passive}></View>
                      <View style={this.state.count===1?styles.active:styles.passive}></View>
                      <View style={this.state.count===2?styles.active:styles.passive}></View>
                      <View style={this.state.count===3?styles.active:styles.passive}></View>
                      <View style={this.state.count===4?styles.active:styles.passive}></View>
                   </View>
                 </Image>
              </View>
              <TouchableOpacity style={styles.searchIcon}>
                <Image style={styles.iconSize} source={require('./assets/search1.png')}></Image>
              </TouchableOpacity>
              <TouchableOpacity style={styles.drawerIcon} onPress={this.openDrawer.bind(this)}>
                <Image style={styles.iconSize}
                source={require('./assets/menu.png')}></Image>
              </TouchableOpacity>
              <ListView
                renderFooter={() => <Footer />}
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <TouchableOpacity style={styles.button}>
                <View style={styles.listTile}>
                  <View style={styles.listImageView}>
                   <Image
                   style={styles.listImage}
                   source={require('./assets/stop.png')}
                   />
                  </View>
                  <View style={styles.subList}>
                    <View style={styles.listTextView}>
                      <Text style={styles.mainTitle}>{rowData}</Text>
                    </View>
                    <View style={styles.listSubView}>
                 	    <View style={styles.listClockView}>
                       	<Image
                     			style={styles.listClockIcon}
                     			source={require('./assets/clock.png')}
                     		/>
                      </View>
                    	<View style={styles.listDateView}>
                          <Text>03 November 2016</Text>
                      </View>
                    	<View style={styles.listCommentView}>
                          <Image
                     			style={styles.commentIcon}
                     			source={require('./assets/comment.png')}
                     		 />
                      </View>
                    	<View style={styles.commentNumber}>
                          <Text>12</Text>
                      </View>
                  </View>
                </View>
              </View>
             </TouchableOpacity>}
            />
      </View>
     </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  search1: {
    width: 25,
    height: 25,
    position: 'absolute',
    left: 320,
    bottom: 530
  },
  active: {
    borderRadius: 5,
    marginLeft: 5,
    height: 10,
    width: 10,
    backgroundColor: '#255FB1'
  },
  passive: {
    borderRadius: 5,
    height: 10,
    marginLeft: 5,
    width: 10,
    backgroundColor: '#E0E0E0'
  },
  search2: {
    position: 'absolute',
    left: 20,
    bottom: 530
  },
  button: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderView:{
    height: height/2
  },
  sliderImage:{
    width: width,
    height: height/2
  },
  sliderButtonView:{
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  sliderButton:{
    backgroundColor: '#255FB1',
    padding: 10,
    marginTop: height/8
  },
  sliderButtonText:{
    fontSize: 15,
    color: 'white'
  },
  sliderText:{
    textAlign: 'center',
    marginTop: height/30,
    marginBottom: height/17,
    fontSize: 20,
    color: 'white'
  },
  sliderIndicator:{
    position: 'absolute',
    top: height/2.20,
    left: height/4.2,
    flexDirection: 'row'
  },
  searchIcon:{
    position: 'absolute',
    top: 10,
    left: width-50
  },
  drawerIcon:{
    position: 'absolute',
    top: 10,
    right: width-50,
  },
  iconSize:{
    width: 25,
    height: 25
  },
   footerButton: {
    height: height/9,
    backgroundColor: '#255FB1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawer: {
   flex: 1,
   backgroundColor: '#fff'
  },
  drawerMenu: {
   margin: 10,
   fontSize: 15,
   textAlign: 'left'
  },
 footerButton: {
  height: height/9,
  backgroundColor: '#255FB1',
  justifyContent: 'center',
  alignItems: 'center',
 },
 textFooter: {
   color:'white'
 },
 listTile:{
   flexDirection: 'row',
   height: 100,
   padding: 10
 },
 listImageView:{
   flex: 0.2,
   paddingRight: 35
 },
 listImage:{
   width: 75,
   height: 75
 },
 subList:{
   flex: 0.7
 },
 listTextView:{
   flex: 0.8
 },
 listSubView:{
   flex: 0.3,
   flexDirection:'row'
 },
 listClockView:{
   paddingTop: 10
 },
 listClockIcon:{
   width: 10,
   height: 10
 },
 listDateView:{
   paddingTop: 5,
   paddingLeft: 7
 },
 listCommentView:{
   paddingTop: 8,
   paddingLeft: 15
 },
 commentIcon:{
   width: 15,
   height: 15
 },
 commentNumber:{
   paddingTop: 6,
   paddingLeft: 7
 },
  instructions: {
    fontSize: 16,
    textAlign: 'center',
    margin: 15,
  },
});

module.exports = HomeScreen;
