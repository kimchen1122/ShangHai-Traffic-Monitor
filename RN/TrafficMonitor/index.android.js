/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import BDMapModule from ('react-native-baidumapkit/BDMapModule');
import BDMapView from ('react-native-baidumapkit');

export default class TrafficMonitor extends Component {
  render() {
    return (
      <BDMapView style={styles.mapViewStyle}
                       ref={'locationMap'}
                       isEnableClicked={true}
                       range={this.state.range}
                />
 let value = {
                "baidu_latitude"    :this.props["baidu_latitude"],
                "baidu_longitude"   :this.props["baidu_longitude"],
                "avatar"            :this.props.avatar
            }
BDMapModule.setLocation(React.findNodeHandle(this.refs.locationMap),value);
BDMapModule.setLocationAnimation(React.findNodeHandle(this.refs.locationMap),value);
BDMapModule.setRuler(React.findNodeHandle(this.refs.locationMap),20);         
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TrafficMonitor', () => TrafficMonitor);
