exports.normalResult = function(data){
  var result = {
    code: 200,
    message: "success",
    data: data
  }
  return result;
}
exports.errorResult = function(message, type, error){
  var result = {
    code: type ? type : 901,
    message: message ? message : 'something wrong...',
    error: error ? error : '',
  }
  return result;
}