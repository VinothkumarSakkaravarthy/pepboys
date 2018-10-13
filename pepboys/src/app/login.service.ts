import { Injectable } from '@angular/core';
// import * as MongoClient from "mongodb";
// import {MongoClient} from "mongodb";
// var MongoClient = require('mongodb').MongoClient;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() {
    // this.insertQuerytoMongoDBCluster();
  }

  // connect mongo DB
connectMongoDB() {
  // var MongoClient = require('mongodb').MongoClient;

  // tslint:disable-next-line:max-line-length
  // var uri = "mongodb://vino-user_17:Vino17@mongodb@pepboyscluster0-shard-00-00-he3xt.mongodb.net:27017,pepboyscluster0-shard-00-01-he3xt.mongodb.net:27017,pepboyscluster0-shard-00-02-he3xt.mongodb.net:27017/test?ssl=true&replicaSet=PepBoysCluster0-shard-0&authSource=admin&retryWrites=true";
  // MongoClient.connect(uri, function(err, db) {
  //   db.close();
  // });
}
  insertQuerytoMongoDBCluster() {
    // tslint:disable-next-line:max-line-length
    // var uriTestDb = "mongodb://vino-user_17:Vino17@mongodb@pepboyscluster0-shard-00-00-he3xt.mongodb.net:27017,pepboyscluster0-shard-00-01-he3xt.mongodb.net:27017,pepboyscluster0-shard-00-02-he3xt.mongodb.net:27017/test?ssl=true&replicaSet=PepBoysCluster0-shard-0&authSource=admin&retryWrites=true";
    // MongoClient.connect(uriTestDb, function (err, db) {
    //   db.close();
    // });
    // var MongoClient = require('mongodb').MongoClient;

// tslint:disable-next-line:max-line-length
/*     var uri = "mongodb://vino-user_17:Vino17@mongodb@pepboyscluster0-shard-00-00-he3xt.mongodb.net:27017,pepboyscluster0-shard-00-01-he3xt.mongodb.net:27017,pepboyscluster0-shard-00-02-he3xt.mongodb.net:27017/test?ssl=true&replicaSet=PepBoysCluster0-shard-0&authSource=admin&retryWrites=true";
    MongoClient.connect(uri, function(err, db) {
      //Insert document Query into mongo-db cluster
      db.collection('inventory').insertMany([
        // MongoDB adds the _id field with an ObjectId if _id is not present
        { item: "journal", qty: 25, status: "A",
            size: { h: 14, w: 21, uom: "cm" }, tags: [ "blank", "red" ] },
        { item: "notebook", qty: 50, status: "A",
            size: { h: 8.5, w: 11, uom: "in" }, tags: [ "red", "blank" ] },
        { item: "paper", qty: 100, status: "D",
            size: { h: 8.5, w: 11, uom: "in" }, tags: [ "red", "blank", "plain" ] },
        { item: "planner", qty: 75, status: "D",
            size: { h: 22.85, w: 30, uom: "cm" }, tags: [ "blank", "red" ] },
        { item: "postcard", qty: 45, status: "A",
            size: { h: 10, w: 15.25, uom: "cm" }, tags: [ "blue" ] }
     ])
     .then(function(result) {
       // process result
     })

       db.close();
    }); */
  }

  // retrieve Query from MongoDB
  retrieveQueryFromMongoDB() {
    // var MongoClient = require('mongodb').MongoClient;

// tslint:disable-next-line:max-line-length
/*     var uri = "mongodb://vino-user_17:Vino17@mongodb@pepboyscluster0-shard-00-00-he3xt.mongodb.net:27017,pepboyscluster0-shard-00-01-he3xt.mongodb.net:27017,pepboyscluster0-shard-00-02-he3xt.mongodb.net:27017/test?ssl=true&replicaSet=PepBoysCluster0-shard-0&authSource=admin&retryWrites=true";
    MongoClient.connect(uri, function(err, db) {
      //Retrieve document Query from mongo-db cluster
      const cursor = db.collection('inventory').find({});
      console.log("cursor: data from Mongo DB>>",cursor);
       db.close();
    }); */
  }
}
