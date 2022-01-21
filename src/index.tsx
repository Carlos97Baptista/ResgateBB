import React from 'react';
import {View, Text} from 'react-native';
import Routes from './routes';
import ResgateList from './screens/ResgateList';
import {NavigationContainer} from '@react-navigation/native';
const App = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};
export default App;
