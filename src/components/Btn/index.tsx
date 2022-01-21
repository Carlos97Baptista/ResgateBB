import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';

const Btn = props => {
  const {label, onPress} = props;
  return (
    <Button onPress={() => onPress()}>
      <Txt>{label}</Txt>
    </Button>
  );
};
export default Btn;

const Button = styled.TouchableOpacity`
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #fae128;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Txt = styled.Text`
  font-size: 18px;
  color: #005aa5;
  font-weight: bold;
`;
