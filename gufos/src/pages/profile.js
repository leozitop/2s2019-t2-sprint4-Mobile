import React, {Component} from 'react';
import {Text} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

class Profile extends Component {

  constructor() {
    super();
    this.state = {
      usuarios = [],
    }
  }

  

  render() {
    return (
      <FlatList/>
    );
  }
}

export default Profile;
