import mongoose from 'mongoose';

const userExpenseRecordSchema = new mongoose.Schema({
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

    fk_Item: {type: mongoose.Schema.Types.ObjectId, ref: 'Items'}
});


export default mongoose.model('Expense', userExpenseRecordSchema);


