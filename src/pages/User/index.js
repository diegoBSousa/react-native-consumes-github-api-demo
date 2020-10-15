import React, {useLayoutEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import api from '../../services/api';

async function getStarredRepositories(user) {
  return await api.get(`/users/${user}/starred`);
}

function User({navigation, route}) {
  const [name, setName] = useState(route.params.user.name);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: name === '' ? 'Name Not Found' : name,
    });
  }, [navigation, name]);

  const response = getStarredRepositories(route.params.user.login);

  if (typeof response.data === 'array') {
    const [stars, _] = useState(response.data);
  }

  return <View />;
}

User.PropTypes = {
  navigation: PropTypes.shape({
    setOptions: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default User;
