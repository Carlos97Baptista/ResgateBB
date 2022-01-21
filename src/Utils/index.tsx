export const currencyFormat = num => {
  let val = num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  val = val + '';
  let arrVal = val.split('.');
  return arrVal[0].replace(',', '.') + ',' + arrVal[1];
};
