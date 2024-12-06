const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();
const port = 6565;
const url = "mongodb://localhost:27017";
const dbName = "aitnodedb";
const collectionName = "users";
const client = new MongoClient(url);

app.get("/getusers", async (req, res) => {
  //node app is connecting with Mongodb Server
  await client.connect();

  //Connect with Database
  const db = client.db(dbName);

  //connect with Collection
  const collection = db.collection(collectionName);

  //Access the data from collection
  const usersData = await collection.find().toArray();

  res.json({
    ok: true,
    result: usersData,
  });
});
// http://localhost:6565/getusers

app.listen(port, () => {
  console.log("Node Server Started");
});
