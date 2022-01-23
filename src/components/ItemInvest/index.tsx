import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {currencyFormat} from '../../Utils';

const ItemInvest = props => {
  const navigation = useNavigation();
  const {invest} = props;
  return (
    <Box
     testID={`${invest.nome}`}
      carencia={invest.indicadorCarencia}
      onPress={() => {
        invest.indicadorCarencia === 'S'
          ? null
          : navigation.navigate('ResgateDetails', {invest: invest});
      }}>
      <View>
        <Title>{invest.nome}</Title>
        <Objective>{invest.objetivo}</Objective>
      </View>
      <Title>{currencyFormat(invest.saldoTotal)}</Title>
    </Box>
  );
};
export default ItemInvest;

const Box = styled.TouchableOpacity`
  background-color: #fff;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin: 1px;
  opacity: ${props => (props.carencia == 'S' ? 0.4 : 1)};
`;
const Title = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: bold;
`;

const Objective = styled.Text`
  color: #666;
  font-size: 14px;
`;

const Money = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: bold;
`;
