import React, {
  StyleSheet
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleBar: {
    flexDirection: 'row',
    paddingTop: 5,
    flex: 0.1,
    paddingRight: 5,
    paddingLeft: 5,
    backgroundColor:'#1D57A9',
    borderBottomWidth:1,
    borderBottomColor:'gray'
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold'
  },
  menuIcon:{
    flex: 0.25,
    paddingLeft: 5,
    paddingTop: 15,
  },
  menuText:{
    color: 'white',
    fontSize: 25
  },
  logo: {
    height: 20,
    width: 20
  },
  titleChat: {
    fontSize: 20
  },
  setWidth: {
    flex: 1
  },
  tabWidth: {
    flex: 0.1
  },
  tabView: {
    flexDirection: 'row'
  },
  tabContainer: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor:'#1D57A9'
  },
  userIcon: {
    width: 30,
    borderWidth: 1,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    borderWidth: 2,
    flex: 0.25
  },
  notificationIcon: {
    position: 'absolute',
    marginLeft: 25,
    marginTop: -10,
    marginBottom: 10
  },
  notificationBox: {
    marginLeft: 5,
    marginTop: -12,
    height: 15,
    width: 15,
    backgroundColor: '#e53935',
    borderRadius: 7.5,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  notificationCount: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10
  },
  inactive: {
    flex: 0.25,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5,
    paddingTop: 5
  },
  active: {
    flex: 0.25,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 2,
    borderTopColor: 'white',
    paddingBottom: 10,
    paddingTop: 10
  },
  activeText: {
    color:'white'
  },
  inactiveText: {
    color:'#d3d3d3'
  },
  mainTitle: {
    fontSize: 18
  },
  search: {
    width: 28,
    height: 28,
  },
  subTitle: {
    color: '#BDBDBD',
    marginTop: 5
  },
  searchButton: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerList: {
    flex: 1,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C1C1C1',
  },
  input: {
    height: 30,
    flex: 1,
    paddingHorizontal: 8,
    fontSize: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
  },
});

module.exports = styles;
