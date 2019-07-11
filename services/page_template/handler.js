var sqlGenerator = require('../tool/sqlstrGenerator');
var sqlExecutor = require('../tool/sqlstrExecutor');
var formatResult = require('../tool/formatResult');
const TABLE_NAME = 'page_template'

 exports.list = function(req, res) {
  var result = {};
  var sql = sqlGenerator.pageTemplate.queryList(TABLE_NAME);
  var promise = sqlExecutor.executeQuery(sql);
  promise.then((data) => {
    if(Array.isArray(data)){
      result = formatResult.normalResult(data);
    } else {
      result = formatResult.normalResult([]);
    }
    res.json(result);
  }).catch((err) => {
    result = formatResult.errorResult(err);
    res.json(result);
  })
}

exports.view = function(req, res) {
  var result = {};
  var sql = sqlGenerator.pageTemplate.queryDetail(req.params.id);
  var promise = sqlExecutor.executeQuery(sql);
  promise.then((data) => {
    if(Array.isArray(data) && data.length){
      result = formatResult.normalResult(data[0]);
    } else {
      result = formatResult.normalResult(null);
    }
    res.json(result);
  }).catch((err) => {
    result = formatResult.errorResult(err);
    res.json(result);
  })
}

exports.create = function(req, res) {
  var model = itemModel(null, req.body.name, req.body.content);
  var result = {};
  var sql = sqlGenerator.pageTemplate.create(model);
  var promise = sqlExecutor.executeQuery(sql);
  promise.then((data) => {
    if(data && data.affectedRows === 1){
      result = formatResult.normalResult(data.insertId);
    } else {
      result = formatResult.errorResult('create failed');
    }
    res.json(result);
  }).catch((err) => {
    result = formatResult.errorResult(err);
    res.json(result);
  })
}

exports.update = function(req, res) {
  var model = itemModel(req.params.id, req.body.name, req.body.content);
  var result = {};
  var sql = sqlGenerator.pageTemplate.update(req.params.id, model);
  var promise = sqlExecutor.executeQuery(sql);
  promise.then((data) => {
    if(data && data.affectedRows === 1){
      result = formatResult.normalResult(model);
    } else {
      result = formatResult.errorResult('update failed');
    }
    res.json(result);
  }).catch((err) => {
    result = formatResult.errorResult(err);
    res.json(result);
  })
}

exports.remove = function(req, res) {
  var result = {};
  var sql = sqlGenerator.pageTemplate.remove(req.params.id);
  var promise = sqlExecutor.executeQuery(sql);
  promise.then((data) => {
    if(data && data.affectedRows === 1){
      result = formatResult.normalResult(req.params.id);
    } else {
      result = formatResult.errorResult('item to remove is not exist');
    }
    res.json(result);
  }).catch((err) => {
    result = formatResult.errorResult(err);
    res.json(result);
  })
}

function itemModel(id, name, content){
  return {
    id: id,
    name: name,
    content: content,
  }
}

