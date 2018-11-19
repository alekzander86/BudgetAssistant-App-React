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

    fk_item: {type: mongoose.Schema.Types.ObjectId, ref: 'Items'},
    
    fk_user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}

    
});

export default mongoose.model('Income', userIncomeRecordSchema);