function isAvailableEmail(sEmail) {
  var re = /^\w+(\.\w+)*@\w+\.\w+(\.\w+)*$/i;
  return re.test(sEmail);
}

console.log(isAvailableEmail('www.s@187.com.www'))