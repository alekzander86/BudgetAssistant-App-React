import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({

    
    item:{
        type: String,
        required: true
    },
    
    fk_concept: {type: mongoose.Schema.Types.ObjectId, ref: 'Concepts'}
    
    
});


export default mongoose.model('Items', itemSchema);