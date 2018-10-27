import mongoose from 'mongoose';


const userItemSchema = new mongoose.Schema({

    fk_concept :{type: mongoose.Schema.Types.ObjectId, ref: 'Concepts'},

    fk_user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},

    fk_item :{type: mongoose.Schema.Types.ObjectId, ref: 'Items'}
});


export default mongoose.model('userItems', userItemSchema);