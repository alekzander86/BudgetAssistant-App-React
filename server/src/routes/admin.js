import express from 'express';
import Concept from '../models/concept';
import Item from '../models/item';
import parseErrors from '../utils/parseErrors';


const router = express.Router();


// ruta que retorna los conceptos creados {income, expense}
router.get('/concept', (req, res)=>{
    Concept.find()
    .then(concept=>{
        res.json(concept);
    })
    .catch(err=>{
        res.status(400).json({errors: parseErrors(err.errors)});
    })

});

// ruta que crea los conceptos {income, expense}
router.post('/add_concept', (req, res)=>{
    const {concept} = req.body;
    const concepts = new Concept({concept});
    concepts.save()
    .then(()=>{
        res.json({});
    })
    .catch(err=>{
        res.status(400).json({errors: parseErrors(err.errors)});
    });
    
});

// ruta que crea los item de ingreso 

router.post('/add/item_income', (req, res)=>{
    const {item, concept} = req.body;
    Concept.findOne({concept})
    .then(result=>{
        if(result){
            const currentItem = new Item({item, fk_concept: result._id});
            currentItem.save();
            res.json({});
        }else{
            res.status(401).json({errors:{global:'Invalid Concept'}});
        }
    })
    .catch(err=>{
        res.status(400).json({errors: parseErrors(err.errors)});
    });
       
});


// ruta que crea los item de gasto

router.post('/add/item_expense', (req, res)=>{
    const {item, concept} = req.body;
    Concept.findOne({concept})
    .then(result=>{
        if(result){
            const currentItem = new Item({item, fk_concept: result._id});
            currentItem.save();
            res.json({});
        }else{
            res.status(401).json({errors:{global:'Invalid Concept'}});
        }
    })
    .catch(err=>{
        res.status(400).json({errors: parseErrors(err.errors)});
    });
       
});


export default router;