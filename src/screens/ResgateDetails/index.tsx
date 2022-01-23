import React, {useState} from 'react';
import {
  View,
  FlatList,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import styled from 'styled-components/native';
import ItemDetail from '../../components/ItemDetail';
import InvestmentDetail from '../../components/InvestmentDetail';
import {currencyFormat} from '../../Utils';
import Btn from '../../components/Btn';
import ModalBB from '../../components/ModalBB';
const ResgateDetails = ({route, navigation}) => {
  const {invest} = route.params;

  const [acao, setAcao] = useState([]);
  const [modalData, setModalData] = useState({
    label: '',
    btnClick: null,
    title: '',
    subtitle: '',
    errorList: [],
  });
  const [visible, setVisible] = useState(false);
  const getActionsValues = acaoValues => {
    let acaoList = [...acao];
    acaoList = acaoList.filter(item => item.id !== acaoValues.id);
    acaoList.push(acaoValues);
    setAcao(acaoList);
  };

  const getTotalValue = () => {
    let resgate = 0;

    for (let i = 0; i < acao.length; i++) {
      resgate = resgate + acao[i].value;
    }
    return currencyFormat(resgate);
  };
  const renderItem = ({item}) => (
    <InvestmentDetail
      getActionsValues={getActionsValues}
      saldoTotal={invest.saldoTotal}
      value={item}
    />
  );
  const handleConfirm = () => {
    let acoes = [...acao];
    acoes = acoes.filter(item => item.error);
    if (acoes.length === 0) {
      setModalData({
        label: 'NOVO RESGATE',
        btnClick: () => navigation.navigate('ResgateList'),
        title: 'RESGATE EFETUADO!',
        subtitle:
          'O valor solicitado estará em sua conta em até  5 dias úteis!',
        errorList: [],
      });
      setVisible(true);
    } else {
      setModalData({
        label: 'CORRIGIR',
        btnClick: () => setVisible(false),
        title: 'DADOS INVÁLIDOS',
        subtitle:
          'Você preeencheu um ou mais campos com o valor acima do permitido:',
        errorList: acoes,
      });
      setVisible(true);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} testID="Keyboard">
      <View>
        <ModalBB
          visible={visible}
          setVisible={setVisible}
          label={modalData.label}
          btnClick={modalData.btnClick}
          title={modalData.title}
          subtitle={modalData.subtitle}
          errorList={modalData.errorList}
        />

        <FlatList
          testID="resgate-details"
          ListHeaderComponent={() => (
            <>
              <Title>DADOS DO INVESTIMENTO</Title>
              <Box>
                <ItemDetail label={'Nome'} value={invest.nome} />
                <Divider />
                <ItemDetail
                  label={'Saldo total disponivel'}
                  value={currencyFormat(invest.saldoTotal)}
                />
              </Box>
              <Title>RESGATE SEU INVESTIMENTO</Title>
            </>
          )}
          ListFooterComponent={() => (
            <>
              <Box>
                <ItemDetail
                  label={'Total a resgatar'}
                  value={'R$ ' + getTotalValue()}
                />
              </Box>
              <Btn
                label={'CONFIRMAR RESGATE'}
                testID={'subimit'}
                onPress={handleConfirm}
              />
            </>
          )}
          data={invest.acoes}
          renderItem={renderItem}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};
export default ResgateDetails;

const Box = styled.View`
  background-color: #fff;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const Divider = styled.View`
  height: 1px;
  width: 110%;
  background-color: #ddd;
`;
const Title = styled.Text`
  font-size: 16px;
  color: #666;
  font-weight: bold;
  margin: 10px;
  margin-top: 15px;
`;
