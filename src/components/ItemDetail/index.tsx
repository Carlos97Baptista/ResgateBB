import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';

const ItemDetail = props => {
  const {label, value} = props;
  return (
    <Box>
      <Txt>{label}</Txt>
      <Txt color={'#666'}>{value}</Txt>
    </Box>
  );
};
export default ItemDetail;

const Box = styled.View`
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Txt = styled.Text`
  font-size: 18px;
  color: ${props => (props.color ? props.color : '#000')};
  font-weight: bold;
`;
