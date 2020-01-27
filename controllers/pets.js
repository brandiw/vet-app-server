// Add modules and dependencies
const mongoose = require ('mongoose')
const express = require('express')

let router = require('express').Router()
let db = require('../models')

// // PETS
//GET all pets '/' assoc with one user 
router.get('/', (req, res) => {
    // res.send('GET all pets from a user')
    db.User.findById(req.params.id)
    .then((user) => {
        let pets = user.pet
        res.send(pets)
    })
    .catch(err => {
        console.log('Error in GET ALL Pets route', err)
        res.status(503)
    })
})

//GET '/new' form for adding new pet to a user
router.get('/new', (req, res) => {
    res.send('GET new form for adding a new pet')
})

//GET '/:id' to view single pet by id
router.get('/:id', (req, res) => {
    // res.send('GET info on a single pet')
    db.User.findById(req.params.id)
    .then(user => {
        let pet = user.pet._id
        if(pet) {
            res.send(pet)
        }
        else {
            res.status(404).send('Resource not located')
        }
    })
    .catch(err => {
        console.log('Error in GET single pet route', err)
    })
})

//PUT '/:id' to edit pet data for one pet
router.put('/:id', (req, res) => {



    // res.send('PUT route to edit pet data form')
})

//POST '/' create new pet from form (include image)
// res.send('POST route to add "new pet from" to db')
router.post('/', (req, res) => {
    db.User.findById(req.params.id)
<<<<<<< HEAD
    .then(User => {
        User.pets.push({
            name: req.body.name,
            typeOfAnimal: req.body.typeOfAnimal,
            breed: req.body.breed,
            age: req.body.age,
            sex: req.body.sex,
            image: req.body.image,
            summary: {
                rabiesShot: req.body.rabiesShot,
                microchip: req.body.microchip
            },
            treatment: {
                treatment: req.body.treatment,
                treatmentDate: req.body.treatmentDate
            }
        })
        User.save()
    .then(newPet => {
        res.redirect('/')
    })
    .catch(err => {
        console.log(err, 'Error')
    })
})

//     name: {
//         type: String,
//         required: true
//     },
//     typeOfAnimal: {
//         type: String,
//         required: true
//     },
//     breed: {
//         type: String,
//         required: true
//     },
//     age: Number,
//     sex: String,
//     image: String,
//     summary: summarySchema,
//     treatment: treatmentSchema,
//     vet: {type: mongoose.Schema.Types.ObjectId, ref: 'Vet'}
//   })


    res.send(req.body)
=======
        .then(User => {
            User.pets.push({
                name: req.body.name,
                typeOfAnimal: req.body.typeOfAnimal,
                breed: req.body.breed,
                age: req.body.age,
                sex: req.body.sex,
                image: req.body.image,
                summary: {
                    rabiesShot: req.body.rabiesShot,
                    microchip: req.body.microchip
                },
                treatment: {
                    treatment: req.body.treatment,
                    treatmentDate: req.body.treatmentDate
                }
            })
            User.save()
        .then(newPet => {
            res.redirect('/')
        })
        .catch(err => {
            console.log(err, 'Error')
        })
    })
>>>>>>> aa8e54ca7a517fea734516d9c8b2fbe7c56f5a11
})


//DELETE '/:id' delete a pet from a user's pet list
router.delete('/:id', (req, res) => {
    res.send('DELETE route for removing a pet from a user')
})

// // MEDICAL SUMMARY ROUTES

// GET - All medical records for single pet

router.get('/:id/medical', (req, res) => {
    db.User.findById(req.params.id)
    .then(summary => {
        console.log(user.pet.summary)
        res.render('/:id/medical', { summary })
    })
    .catch(err => {
        console.log('error', err)
        res.render('error')
    })
})

// GET - pet's individual medical record details

router.get('/:id/medical/:id', (req, res) => {
    res.send('Display details of one medical record')
})


// PUT - edit pet's indvidual medical record
router.put('/:id/medical/:id', (req, res) => {
    db.User.findOneAndUpdate({
        _id: req.params.id
    }, 
        req.body,
    {
        new: true
    })
    .then(updatedSummary => {
        console.log(updatedSummary)
        res.redirect('/:id/medical/:id')
    })
    .catch(err => {
        console.log('error', err)
        res.render('error')
    })
})


// // TREATMENT ROUTES
// GET - All details of single treatment
router.get('/:id/treatment', (req, res) => {
    res.send('Display details of a treatment')
})

// GET - display form for editing single pet treatment details
router.get('/:id/treatment/new', (req, res) => {
    res.send('Display form for editing one pet treatment')
})

// POST - create new pet treatment record
router.post('/:id/treatment', (req, res) => {
    res.send('Update pet treatment, redirect back to /:id/treatment')
})

// PUT - edit a pet treatment record that already exists
router.put('/:id/treatment/', (req, res)=> {

})

module.exports = router