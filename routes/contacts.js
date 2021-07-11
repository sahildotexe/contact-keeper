const express = require('express');
const router = express.Router();

//@route  GET api/contacts 
//@desc Get All Users Contacts
//@acess Private
router.get('/',(req,res)=> {
    res.send('Get all contacts')
});

//@route  POST api/contacts 
//@desc Add new contact
//@acess Private
router.post('/',(req,res)=> {
    res.send('Add a contact')
});

//@route  PUT api/contacts 
//@desc Update Contact
//@acess Private
router.put('/:id',(req,res)=> {
    res.send('Update COntact')
});
//@route  DELETE api/contacts 
//@desc Delete contact
//@acess Private
router.delete('/:id',(req,res)=> {
    res.send('Delete Contact')
});

module.exports = router;