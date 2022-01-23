import React, {useState} from 'react';
import {View, Text} from 'react-native';
import ItemDetail from '../ItemDetail';
import styled from 'styled-components/native';
import CurrencyFormatter from 'react-native-currency-format';
import CurrencyInput from 'react-native-currency-input';
import {currencyFormat} from '../../Utils';

const InvestmentDetail = props => {
  const {value, saldoTotal, getActionsValues} = props;
  const [resgate, setResgate] = useState(0);
  const [limiteAtingido, setLimite] = useState(false);
  const getValue = () => {
    let percent = parseFloat(value.percentual) / 100;
    let valorTotal = parseFloat(saldoTotal);
    return valorTotal * percent;
  };
  const handleValue = val => {
    let erro = false;
    if (parseFloat(val) > getValue()) {
      setLimite(true);
      erro = true;
    } else {
      setLimite(false);
      erro = false;
    }
    setResgate(val);
    let error = {
      id: value.id,
      error: erro,
      name: value.nome,
      maximo: getValue(),
      value: parseFloat(val),
    };
    getActionsValues(error);
  };
  const getActionName =(name) =>{
    let acaoName = name.substring(name.indexOf('(')+1, name.indexOf(')'))
    return acaoName
}
  return (
    <Box>
      <ItemDetail label={'Ação'} value={getActionName(value.nome)} />
      <Divider />
      <ItemDetail
        label={'Saldo acumulado'}
        value={'R$ ' + currencyFormat(getValue())}
      />
      <Divider />
      <InputBox>
        <InputLabel>Valor a resgatar</InputLabel>
        <CurrencyInput
        testID={`${getActionName(value.nome)}`}
          value={resgate}
          onChangeValue={val => handleValue(val)}
          prefix="R$ "
          delimiter="."
          separator=","
          precision={2}
          // onChangeText={formattedValue => {
          //   console.log(formattedValue);
          // }}
          style={{padding: 0, borderBottomColor: '#DDD', borderBottomWidth: 1}}
        />
        {limiteAtingido ? (
          <ErrorBox>
            <ErrorText>
              Valor não pode ser maior que {'R$ ' + currencyFormat(getValue())}
            </ErrorText>
            <ErrorDivider />
          </ErrorBox>
        ) : null}
      </InputBox>
    </Box>
  );
};
export default InvestmentDetail;

const ErrorBox = styled.View`
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;
const ErrorDivider = styled.View`
  width: 100%;
  height: 1px;
  background-color: red;
`;
const ErrorText = styled.Text`
  font-size: 12px;
  color: red;
`;
const Box = styled.View`
  margin-bottom: 10px;
  background-color: #fff;
  padding-left: 10px;
  padding-right: 10px;
`;
const InputBox = styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
`;
const InputLabel = styled.Text`
  font-size: 14px;
  color: #666;
`;
const Txt = styled.Text`
  font-size: 18px;
  color: ${props => (props.color ? props.color : '#000')};
  font-weight: bold;
`;
const Divider = styled.View`
  height: 1px;
  width: 110%;
  background-color: #ddd;
`;

const Input = styled.TextInput`
  background-color: transparent;
  border-bottom-color: #ddd;
  border-bottom-width: 1px;
  padding: 0px;
  margin: 0px;
`;
