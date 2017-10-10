const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//Todo.remove everything

// Todo.remove({}).then((res) => {
//     console.log(res);
// });

Todo.findOneAndRemove({_id: '59dc3be972ac6b62871b5b5a'}).then((todo) => {
    console.log(todo);
});


Todo.findByIdAndRemove('59dc3be972ac6b62871b5b5a').then((todo)=> {
    console.log(todo);
});