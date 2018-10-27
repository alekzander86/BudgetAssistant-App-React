import mongoose from 'mongoose';


const userIncomeRecordSchema = new mongoose.Schema({

    amount: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },

    fk_user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},

    fk_userItem: {type: mongoose.Schema.Types.ObjectId, ref: 'userItems'}
});

export default mongoose.model('UIR', userIncomeRecordSchema);