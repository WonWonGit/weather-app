import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Loading from "./Loading";
import * as Location from 'expo-location';
import { Alert } from 'react-native';

export default class extends React.Component {
  getLocation = async() => {
    try{
      await Location.requestPermissionsAsync();
      const {coords : {latitude, longitude}} = await Location.getCurrentPositionAsync();
    }catch(error){
      Alert.alert("Can't find you","So sad");
    }
  };
  componentDidMount(){
    this.getLocation();
  }
  render(){
    return <Loading/>;
  }
}
