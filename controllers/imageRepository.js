const imageRepository = require('../models/imageRepository');

//URL GET + /api/imageRepository
exports.list = async(req, res)=>{
    const data = await imageRepository.find({})
    res.status(200).json({
        success: true,
        count: data.length,
        data
    })
}

//URL POST + /api/imageRepository
exports.create = async(req, res)=>{
    const data = await imageRepository.create(req.body);
    res.status(201).json({
        success: true,
        data
    })
}

//URL GET + /api/imageRepository/:id
exports.read = async(req, res)=>{
    const data = await imageRepository.findById(req.params.id)
    res.status(200).json({
        success: true,
        data
    })
}

//URL PUT + /api/imageRepository/:id
exports.update = async(req, res)=>{
    const data = await imageRepository.findByIdAndUpdate(req.params.id, req.body)
    res.status(202).json({
        success: true,
        data
    })
}


//URL DELETE + /api/imageRepository:id
exports.delete = async(req, res)=>{
    const data = await imageRepository.deleteOne({_id:req.params.id})
    res.status(data.deletedCount ? 204: 404).json({
        success: data.deletedCount? true: false,
    })
}