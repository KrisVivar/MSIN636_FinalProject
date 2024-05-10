const accountHolder = require('../models/accountHolder');

//URL GET + /api/accountHolder
exports.list = async(req, res)=>{
    const data = await accountHolder.find({})
    res.status(200).json({
        success: true,
        count: data.length,
        data
    })
}

//URL POST + /api/accountHolder
exports.create = async(req, res)=>{
    const data = await accountHolder.create(req.body);
    res.status(201).json({
        success: true,
        data
    })
}

//URL GET + /api/accountHolder/:id
exports.read = async(req, res)=>{
    const data = await accountHolder.findById(req.params.id)
    res.status(200).json({
        success: true,
        data
    })
}

//URL PUT + /api/accountHolder/:id
exports.update = async(req, res)=>{
    const data = await accountHolder.findByIdAndUpdate(req.params.id, req.body)
    res.status(202).json({
        success: true,
        data
    })
}

/*
//URL DELETE + /api/users:id
exports.delete = async(req, res)=>{
    const data = await User.findByIdAndDelete(req.params.id, req.body)
    res.status(200).json({
        succes: true,
        data
    })
}
*/

//URL DELETE + /api/accountHolder:id
exports.delete = async(req, res)=>{
    const data = await accountHolder.deleteOne({_id:req.params.id})
    res.status(data.deletedCount ? 204: 404).json({
        success: data.deletedCount? true: false,
    })
}