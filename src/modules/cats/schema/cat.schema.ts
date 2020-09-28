import * as mongoose from 'mongoose';

export const CatSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'title is blank'],
    },
    avatar: {
        type: String,
        required: [true, 'title is blank'],
    },
    sounds: {
        type: [String],
    },
}, {
    versionKey: false,
    timestamps: true,
});
