// In App.js in a new project

import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import styled from 'styled-components/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';

// Telas
import {ResgateDetails, ResgateList} from '../screens';
const Stack = createNativeStackNavigator();

const Routes = () => {
  const Nav = props => {
    const navigation = useNavigation();
    return (
      <Header>
        {props.name != 'ResgateList' ? (
          <TouchableOpacity
            style={{padding: 5, paddingRigth: 0}}
            onPress={() => navigation.goBack()}>
            <FontAwesomeIcon color={'#FFF'} size={24} icon={faChevronLeft} />
          </TouchableOpacity>
        ) : null}
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Title>Resgate</Title>
        </View>
      </Header>
    );
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ResgateList"
        options={{
          header: () => <Nav name="ResgateList" />,
        }}
        component={ResgateList}
      />
      <Stack.Screen
        name="ResgateDetails"
        options={{
          header: () => <Nav name="ResgateDetails" />,
        }}
        component={ResgateDetails}
      />
    </Stack.Navigator>
  );
};

export default Routes;

const Header = styled.View`
  background-color: #005aa5;
  border-bottom-color: #fae128;
  border-bottom-width: 3px;
  display: flex;
  align-items: center;
  padding: 10px;
  flex-direction: row;
`;
const Title = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;
