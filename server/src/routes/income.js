import express from 'express';
import authenticate from '../middlewares/authenticate';
import Concept from '../models/concept';
import userItem from '../models/userItem';

const router = express.Router();

router.get('/fetch_types', authenticate, (req, res)=>{
    
    const {_id : fkuser} = req.currentUser;
    
    Concept.find({concept:'income'})
     .then(result=>{
         if(result){
             console.log('result._id', result[0]._id);
             userItem.find({fk_concept: result[0]._id, fk_user: fkuser}).populate('fk_item')
             .then(incomeTypes =>{
                if(incomeTypes){
                    console.log('_id', fkuser);
                    res.json({incomeTypes});
                }
                else{
                    res.status(400).json({errors:{global:'Items not found'}})
                }
             })
         }else{
             res.status(400).json({errors:{global:'Concepts not found'}});
         }
    });
   
});


export default router;