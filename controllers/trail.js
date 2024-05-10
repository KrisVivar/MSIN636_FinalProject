const trail = require('../models/trail');

//URL GET + /api/trail
exports.list = async(req, res)=>{
    const data = await trail.find({})
    res.status(200).json({
        success: true,
        count: data.length,
        data
    })
}

//URL POST + /api/trail
exports.create = async(req, res)=>{
    const data = await trail.create(req.body);
    res.status(201).json({
        success: true,
        data
    })
}

//URL GET + /api/trail/:id
exports.read = async(req, res)=>{
    const data = await trail.findById(req.params.id)
    res.status(200).json({
        success: true,
        data
    })
}

//URL PUT + /api/trail/:id
exports.update = async(req, res)=>{
    const data = await trail.findByIdAndUpdate(req.params.id, req.body)
    res.status(202).json({
        success: true,
        data
    })
}

//URL DELETE + /api/trail:id
exports.delete = async(req, res)=>{
    const data = await trail.deleteOne({_id:req.params.id})
    res.status(data.deletedCount ? 204: 404).json({
        success: data.deletedCount? true: false,
    })
}