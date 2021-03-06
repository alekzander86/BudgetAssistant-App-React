import express from 'express';
import authenticate from '../middlewares/authenticate';
import Concept from '../models/concept';
import Item from '../models/item';
import Income from '../models/income';
import parseErrors from '../utils/parseErrors';

const router = express.Router();

router.post('/register', authenticate, (req, res)=>{
    Income.create({ ...req.body.income, fk_user: req.currentUser._id})
    .then(income => res.json({income}))
    .catch(err=>res.status(400).json({errors: parseErrors(err.errors)}));
    
});


router.get('/fetch_types', authenticate, (req, res)=>{
    
    // Concept.find({concept:'income'})
    //  .then(result=>{
    //      if(result){
    //          console.log('result._id', result[0]._id);
    //          userItem.find({fk_concept: result[0]._id, fk_user: fkuser}, {fk_item: 1}).populate('fk_item')
    //          .then(incomeTypes =>{
    //             if(incomeTypes){
    //                 console.log(incomeTypes);
    //                 res.json({incomeTypes});
    //             }
    //             else{
    //                 res.status(400).json({errors:{global:'Items not found'}})
    //             }
    //          })
    //      }else{
    //          res.status(400).json({errors:{global:'Concepts not found'}});
    //      }
    // });

    Concept.find({concept: 'income'}).then(result=>{
        if(result){
            Item.find({fk_concept: result[0]._id},{item: 1}).then(items=>{
                if(items){
                    res.json({items});
                }else{
                    res.status(400).json({errors:{global:'Items not found'}})
                }
            })
        }else{
            res.status(400).json({errors:{global:'Concepts not found'}})
        }
    })
   
});


export default router;