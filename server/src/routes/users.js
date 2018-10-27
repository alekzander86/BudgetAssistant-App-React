import express from 'express';
import User from '../models/user';
import Item from '../models/item';
import userItem from '../models/userItem';
import parseErrors from '../utils/parseErrors';
import sendConfirmationEmail from '../utils/mailer';

const router = express.Router();

// router.use(authenticate);

router.post('/', (req, res)=>{
    const {username, email, password} = req.body.user;
    const user = new User ({username, email});

    // junto al usuario se crean los items del usuario
    Item.find({custom: false})
    .then(items=>{
        items.forEach( (element, index) => {
            userItem.create({
                fk_concept: items[index].fk_concept,
                fk_user: user._id,
                fk_item: items[index]
            }).then(()=>{}).catch(err=>console.log(err));
        });
    });

    user.setPassword(password);
    user.setConfirmationToken();
    user.save()
    .then(currentUser=>{
        sendConfirmationEmail(currentUser);
        res.json({user: currentUser.toAuthJSON()});
    })
    .catch(err=>res.status(400).json({errors: parseErrors(err.errors)}));



})


export default router;