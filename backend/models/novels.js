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
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    like: [mongoose.Schema.Types.ObjectId],
    views: [mongoose.Schema.Types.ObjectId],
    chapter: [{
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        like: [mongoose.Schema.Types.ObjectId],
        views: [mongoose.Schema.Types.ObjectId],
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
            like: [mongoose.Schema.Types.ObjectId],
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
    }],
    category: {
        type: String,
        required: true
    },
    bookshelf: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    }],
})
export default mongoose.model("novels", novelSchema)