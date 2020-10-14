import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

export default function User({navigation, route}) {
  console.tron.log(navigation);
  console.tron.log(route);
  console.tron.log(route.params.user);
  console.tron.log(this);
  return <View />;
}
