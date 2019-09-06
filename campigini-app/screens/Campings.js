import React, { Component } from 'react';
import {
  ImageBackground, Platform, Text, ScrollView, StyleSheet, TouchableOpacity, View, Dimensions, SafeAreaView,
} from 'react-native';
import { MapView } from 'expo';
import { Ionicons, FontAwesome, Foundation, SimpleLineIcons } from '@expo/vector-icons';

const { height, width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  headContainer: {
    top: 0,
    height: height * 0.15,
    width,
  },
  header: {
    flex: 1,
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.15,
    paddingHorizontal: 14,
  },
  settings: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  location: {
    height: 24,
    width: 24,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF7657'
  },
  options : {
    flex: 1,
    paddingHorizontal: 14,
  },
  marker: {
    width: 40,
    height: 40,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems:'center',
    borderWidth: 1,
    borderColor: '#FFF'
  },
  rvMarker: {
    backgroundColor:'#FFBA5A'
  },
  tentMaker: {
    backgroundColor: '#FF7657'
  },
  tabs: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  tab: {
    paddingHorizontal: 14,
    marginHorizontal: 10,
    borderBottomWidth: 3,
    borderBottomColor: 'transparent' 
  },
  tabTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 10
  },
  activeTab: {
    borderBottomColor: '#FF7657'
  },
  activeTabTitle: {
    color: '#FF7657'
  },
  map: {
    flex: 1
  },
  camping: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: '#A5A5A5',
    borderBottomWidth: 0.5,
    padding: 20
  },
  campingDetails: {
    flex: 2,
    paddingLeft: 20,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  campingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 14,
  },
  campingImage: {
    width: width * 0.30,
    height: width * 0.25,
    borderRadius: 6,
  },
  myMarker: {
    zIndex: 2,
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(51, 83, 251, 0.2)'
  },
  myMarkerDot: {
    width: 12,
    height: 12,
    borderRadius: 12,
    backgroundColor: '#3353FB'
  }
})

class Campings extends Component {
  static navigationOptions = {
    header: null
  }
  
  renderHeader() {
   return (
     <View style={styles.headContainer}>
       <View style={styles.header}>
         <View style={{ flex : 2 , flexDirection: 'row'}}>
          <View style={styles.settings}>
            <View style={styles.location}>
              <FontAwesome name="location-arrow" size={14} color="white" />
            </View>
          </View>
          <View style={styles.options}>
            <Text style={{ fontSize: 12, color: '#A5A5A5', marginBottom: 5 }}>
              Detected Location
            </Text>
            <Text style={{ fontSize: 14, fontWeight: '300' }}>
              Northern Islands
            </Text>
          </View>
         </View>
         <View>
          <TouchableOpacity>
            <Ionicons name="ios-settings" size={24} color="black" />
          </TouchableOpacity>
         </View>
       </View>
       {this.renderTabs()}
     </View>
   ) 
  }

  renderTabs() {
    const { filters } = this.props;
    console.log(filters, "filters");
    
    return(
      <View style={styles.tabs} >
        <View style={
          [styles.tab]
        }>
          <Text style={[
            styles.tabTitle
          ]}>
            All Spots
          </Text>
        </View>
        <View style={[
          styles.tab
        ]}>
          <Text
          style={
            [styles.tabTitle]
          }>
            Tenting
          </Text>
        </View>
        <View style={[
          styles.tab
        ]}>
          <Text
          style={
            [styles.tabTitle]
          }>
            RV Camping
          </Text>
        </View>
      </View>
    )
  }

  renderMap() {
    
    return (
     <View></View> 
    )
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.renderHeader()}
        <ScrollView style={styles.container}>
          { }
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default Campings;
