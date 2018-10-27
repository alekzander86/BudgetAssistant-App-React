import mongoose from 'mongoose';


const conceptSchema = new mongoose.Schema({

    concept:{
        type: String,
        required: true,
        unique: true
    }

})


export default mongoose.model('Concepts', conceptSchema);