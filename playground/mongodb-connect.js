//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/todoApp', (err, db) => {
    if(err) {
        return console.log('unable to connect to MongoDB server');
    }
    console.log('connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'somethting to do',
    //     completed: false
    // }, (err, result)=> {
    //     if (err) {
    //         return console.assert('unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'Abaz Udosen',
        age: 25,
        location: 'Jos'
    }, (err, result) => {
        if (err) {
            return console.log('unable to to insert user', err);
        }
        console.log(result.ops);
    });

    db.close();
});