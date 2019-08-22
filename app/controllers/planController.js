const Plan = require('../models/plan')

module.exports.list = (req,res) => {
    Plan.find({userId:req.user._id})
    .then((plans) => {
        res.send(plans)
    })
    .catch(err => {
        res.send(err)
    })
}

module.exports.show = (req,res) => {
    const id = req.params.id
    Plan.findOne({
        _id: id,
        userId: req.user._id
    })
    .then(plans => {
        res.send(plans)
    })
    .catch(err => {
        res.send(err)
    })
}

module.exports.create = (req,res) => {
    const data = req.body
    const plan = new Plan(data)
    plan.userId = req.user._id
    plan.save()
    .then(plans => {
        res.send(plans)
    })
    .catch(err => {
        res.send(err)
    })
}

module.exports.update =(req,res) => {
    const id = req.params.id
    const body = req.body
    Plan.findOneAndUpdate({
        _id: id,
        userId: req.user._id},{$set:body}, {new: true}
    )
    .then(plans => {
        res.send(plans)
    })
    .catch(err => {
        res.send(err)
    })
}

module.exports.destroy = (req,res) => {
    const id = req.params.id
    Plan.findOneAndDelete({
        _id: id,
        userId: req.user._id
    })
    .then(plans => {
        res.send(plans)
    })
    .catch(err => {
        res.send(err)
    })
}