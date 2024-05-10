const accountProfile = require('../models/accountProfile');

//URL GET + /api/accountProfile
exports.list = async(req, res)=>{
    const data = await accountProfile.find({})
    res.status(200).json({
        success: true,
        count: data.length,
        data
    })
}

//URL POST + /api/accountProfile
exports.create = async(req, res)=>{
    const data = await accountProfile.create(req.body);
    res.status(201).json({
        success: true,
        data
    })
}

//URL GET + /api/accountProfile/:id
exports.read = async(req, res)=>{
    const data = await accountProfile.findById(req.params.id)
    res.status(200).json({
        success: true,
        data
    })
}

//URL PUT + /api/accountProfile/:id
exports.update = async(req, res)=>{
    const data = await accountProfile.findByIdAndUpdate(req.params.id, req.body)
    res.status(202).json({
        success: true,
        data
    })
}


//URL DELETE + /api/accountProfile:id
exports.delete = async(req, res)=>{
    const data = await accountProfile.deleteOne({_id:req.params.id})
    res.status(data.deletedCount ? 204: 404).json({
        success: data.deletedCount? true: false,
    })
}