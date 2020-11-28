const mongoose = require('mongoose');
const { integer } = require('vuelidate/lib/validators');
const Schema = mongoose.Schema;

const channelSchema = new Schema({
    channel: String,
    createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Channel', channelSchema);
