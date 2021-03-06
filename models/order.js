var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ordersSchema = new Schema({
    meta: {
        createdAt: Date,
        createdBy: {
            type: Schema.ObjectId,
            ref: 'users'
        },
        updatedAt: Date,
        updatedBy: {
            type: Schema.ObjectId,
            ref: 'users'
        },
        deletedAt: Date,
        deletedBy: {
            type: Schema.ObjectId,
            ref: 'users'
        }
    },
    data: {
        itemName: String
    }
})

mongoose.model('orders', ordersSchema)
