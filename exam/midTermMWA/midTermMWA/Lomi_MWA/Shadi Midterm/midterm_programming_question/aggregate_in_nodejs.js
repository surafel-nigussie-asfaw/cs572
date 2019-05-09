var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectID = require("mongodb").ObjectID;

mongoose.connect("mongodb://localhost/test");

friendSchema = new Schema({
  "name": String,
  "status": Number
});

memberSchema = new Schema({
  friends: [friendSchema]
});

var Member = mongoose.model("Members", memberSchema );

var userid = new ObjectID("537ec520e98bcb378e811d54");

console.log( userid );

Member.aggregate(
  { "$match": { "_id": userid } },
  { "$unwind": "$friends" },
  { "$match": { "friends.status": 0 } },
  function( err, data ) {

    if ( err )
      throw err;

    console.log( JSON.stringify( data, undefined, 2 ) );

  }
);