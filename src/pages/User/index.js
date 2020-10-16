import React, {useLayoutEffect, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import api from '../../services/api';
import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
} from './styles';

async function getStarredRepositories(user, callback) {
  const response = await api.get(`/users/${user}/starred`);
  callback(response.data);
}

function User({navigation, route}) {
  const {user} = route.params;
  const [name, setName] = useState(user.name);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: name === '' ? 'Name Not Found' : name,
    });
  }, [navigation, name]);

  const [stars, setStars] = useState([]);
  useEffect(() => {
    getStarredRepositories(user.login, setStars);
  }, []);

  return (
    <Container>
      <Header>
        <Avatar source={{uri: user.avatar}} />
        <Name>{user.name}</Name>
        <Bio>{user.bio}</Bio>
      </Header>
      <Stars
        data={stars}
        keyExtractor={(star) => String(star.id)}
        renderItem={({item}) => (
          <Starred>
            <OwnerAvatar source={{uri: item.owner.avatar_url}} />
            <Info>
              <Title>{item.name}</Title>
              <Author>{item.owner.login}</Author>
            </Info>
          </Starred>
        )}
      />
    </Container>
  );
}

export default User;
