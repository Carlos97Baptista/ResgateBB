import React, {useState} from 'react';
import {Dimensions, Platform, Text, Pressable, View} from 'react-native';
import Btn from '../Btn';
import styled from 'styled-components';
import {FlatList} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import {currencyFormat} from '../../Utils';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight =
  Platform.OS === 'ios'
    ? Dimensions.get('window').height
    : require('react-native-extra-dimensions-android').get(
        'REAL_WINDOW_HEIGHT',
      );
const ModalBB = props => {
  const {visible, setVisible, label, btnClick, title, subtitle, errorList} =
    props;
const getActionName =(name) =>{
    let acaoName = name.substring(name.indexOf('(')+1, name.indexOf(')'))
    return acaoName
}
  const renderItem = ({item}) => {
    return (
      <SubTitle>{`${getActionName(item.name)}: Valor máximo de R$ ${currencyFormat(
        parseFloat(item.maximo),
      )}`}</SubTitle>
    );
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      isVisible={visible}
      deviceWidth={deviceWidth}
      deviceHeight={deviceHeight}
      onBackdropPress={() => {
        setVisible(false);
      }}>
      <ModalBox>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Title>{title}</Title>
        </View>
        <SubTitle>{subtitle}</SubTitle>
        <FlatList style={{marginTop: 20}} data={errorList} renderItem={renderItem} />
      </ModalBox>
      <Btn label={label} onPress={btnClick} />
    </Modal>
  );
};
export default ModalBB;

const ModalBox = styled.View`
  background-color: #fff;
  padding: 15px;
  padding-bottom: 40px;
`;

const Title = styled.Text`
  font-size: 24px;
  color: #005aa5;
  font-weight: bold;
`;
const SubTitle = styled.Text`
  font-size: 16px;
  color: #005aa5;
  margin-bottom: 10px;
  font-weight: 600;
`;
