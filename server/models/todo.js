var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completetd: {
        type: Boolean,
        default: false
    },
    completetdAt: {
        type: Number,
        default: null
    }
});

module.exports = {Todo};
