const express = require('express');

const router = express.Router();

 
const sign_Contact = require('C:/Users/sanjana.k/angular-bootstrap-example/src/app/sign-in/model/sign-in'); 

 

//retrieving contact

router.get('C:/Users/sanjana.k/angular-bootstrap-example/src/app/sign-in',(req,res,next)=>{
     sign_Contact.find(function(err, sign_in){

        res.json(contacts);

    })

//adding contact


router.post('C:/Users/sanjana.k/angular-bootstrap-example/src/app/sign-in',(req,res,next)=>{

    let newContact = new Contact({

        first_name: req.body.first_name,

        last_name: req.body.last_name,

        password: req.body.phone,

        repassword : req.body.repassword

    });

    newContact.save((err,contact)=>{

        if(err)

        {

            res.json({msg: 'Failed to add sign_in'});

 

        }

        else{

            res.json({msg: 'sign_in added successfully'});

        }

    });

});


});

//delete contacts

router.delete('C:/Users/sanjana.k/angular-bootstrap-example/src/app/sign-in/:id',(req,res,next)=>{

    sign_Contact.remove({_id: req.params.id},function(err,result){

        if(err)

        {

            res.json(err);

        }

        else{

            res.json(result);

        }

    });

});

 

module.exports = router;