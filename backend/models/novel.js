import mongoose from "mongoose";
const novelSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    images: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    like: [String],
    views: [String],
    bookshelf: [String],
    chapter: [{
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        like: [String],
        views: [String],
        comments: [{
            comment: {
                type: String,
                required: true
            },
            author: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'users',
                required: true
            },
            like: [String],
            date: {
                type: Date,
                default: Date.now
            }
        }],
        createdAt: {
            type: Date,
            default: Date.now
        },
        updatedAt: {
            type: Date,
            default: Date.now
        }
    }]
})
export default mongoose.model("novel", novelSchema)