function Mongo(options) {
    this.settings = {
      url: 'mongodb://localhost:27017/football',
      MongoClient:require('mongodb').MongoClient,
      assert:require('assert')
    };
    for(let i in options){
      this.settings[i] = options[i];
    }
    this._run = function (fun) {
      let that = this;
      let settings = this.settings;
      this.settings.MongoClient.connect(this.settings.url, function (err, db) {
        settings.assert.equal(null, err);
        console.log("Connected correctly to server");
        fun(db, function () {
          db.close();
        });
      });
    };
    this.insert = function (collectionName, data, func) {
      //增加数据
      let insertDocuments = function (db, callback) {
        let collection = db.collection(collectionName);
        collection.insertMany([
          data
        ], function (err, result) {
          if (!err) {
            func(true, result);
          } else {
            func(false, result);
          }
          callback(result);
        });
      };
      this._run(insertDocuments);
    };
    this.update = function (collectionName, updateData, data, func) {
      //更新数据
      let updateDocument = function (db, callback) {
        let collection = db.collection(collectionName);
        collection.updateOne(updateData
          , {$set: data}, function (err, result) {
            if (!err) {
              func(true, result);
            } else {
              func(false, result);
            }
            callback(result);
          });
      };
      this._run(updateDocument);
    };
    this.delete = function (collectionName, data, func) {
      //删除数据
      let deleteDocument = function (db, callback) {
        let collection = db.collection(collectionName);
        collection.deleteOne(data, function (err, result) {
          if (!err) {
            func(true, result);
          } else {
            func(false, result);
          }
          callback(result);
        });
      };
      this._run(deleteDocument);
    };
    this.find = function (collectionName, data, func) {
      //查找数据
      let findDocuments = function (db, callback) {
        // Get the documents collection
        let collection = db.collection(collectionName);
        // Find some documents
        collection.find(data).toArray(function (err, docs) {
          if (!err) {
            func(true,docs);
          }
          else {
            func(false, err);
          }
          callback(docs);
        });
      };
      this._run(findDocuments);
    };
  }
  module.exports = Mongo;