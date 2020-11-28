import mongoose from 'mongoose'

const Schema = mongoose.Schema

// Schema defines how chat messages will be stored in MongoDB
const ConversationSchema = new Schema({
    conversation: String,
    channelId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Channel'
    },
    participants: [{ type: Schema.Types.ObjectId, ref: 'User' }]
})

export default mongoose.model('Conversation', ConversationSchema)