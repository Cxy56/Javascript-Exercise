
function parseToMoney(num) {
  num = parseFloat(num.toFixed(3));
  console.log('parseToMoney', num)
  let [integer, decimal] = String.prototype.split.call(num, '.');
  integer = integer.replace(/\d(?=(\d{3})+$)/g, '$&,');
  let result = integer + (decimal ? '.' + decimal : '');
  console.log('parseToMoney===result', result)
  return result
}

parseToMoney(123.56); // return '1,234.56'
parseToMoney(1234.56); // return '1,234.56'
parseToMoney(123456789); // return '123,456,789'
parseToMoney(1087654.321); // return '1,087,654.321'
parseToMoney(1087654); 
