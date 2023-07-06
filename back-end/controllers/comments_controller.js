//Dependencies
const destination = require('express').Router()
const db = require('../models')
const { Comment } = db

//Comments routes
//Get comments
destination.get('/:id', (req, res) => {
    db.Destination.findById(req.params.id)
    .populate('comments')
    .then(destination => {
        console.log(destination.comments)
        //where do we show destinations?
    })
    .catch(err => {
        console.log('err', err)
        //where/what do we render error form
    })
});

//post comment
destination.post('/:id/comment', (req, res) => {
    console.log(req.body)
    db.Destination.findById(req.params.id)
    .then(destination => {
        db.Comment.create(req.body)
        .then(comment => {
            destination.comments.push(comment.id)
            destination.save()
            .then(() => {
                //Where to direct/render
            })
        })
        .catch(err => {
            //Where to direct/render
        })
    })
});

//Update comment
destination.put('/:id', (req, res) => {
    db.Destination.findByIdAndUpdate(req.params.id, res.body)
    .then(() => {
        res.redirect(`/comments/${req.params.id}`)
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
});

//Delete comment
destination.delete('/:id', (req, res) => {
    db.Destination.findByIdAndDelete(req.params.id)
    .then(destination => {
        res.redirect('destinations')
    })
    .catch(err => {
        console.log('err', err)
        //what/where to render
    })
});