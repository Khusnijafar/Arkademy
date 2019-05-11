const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const members = require('../../Members');

// gets all members
router.get('/s', (req, res) => {
    res.json(members);
});

// get single member
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({
            msg: `Member with id ${req.params.id} is not exist`
        });
    }
    
})

// create member
router.post('/', (req, res) => {
   const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        skills: req.body.skills,
        status: 'active'
   }

   if(!newMember.name || !newMember.skills) {
       res.status(400).json({
           msg: 'please include name and skills'
       })
   }
   members.push(newMember);
   res.json(members);
});

module.exports = router;