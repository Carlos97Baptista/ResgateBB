import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import axios from 'axios';
import ItemInvest from '../../components/ItemInvest';
import styled from 'styled-components';

const ResgateList = ({navigation}) => {
  const [investmentList, setInvestmentList] = useState([]);
  useEffect(() => {
    axios
      .get('https://run.mocky.io/v3/ca4ec77d-b941-4477-8a7f-95d4daf7a653')
      .then(function (response) {
        setInvestmentList(response.data.response.data.listaInvestimentos);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const renderItem = ({item}) => <ItemInvest invest={item} />;
  return (
    <View>
      <Box>
        <SubTitle>Investimentos</SubTitle>
        <SubTitle>R$</SubTitle>
      </Box>
      <FlatList data={investmentList} renderItem={renderItem} />
    </View>
  );
};
export default ResgateList;

const Box = styled.View`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
const SubTitle = styled.Text`
  color: #666;
  font-weight: bold;
  font-size: 16px;
`;
