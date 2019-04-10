const Box = require('../models/box');

class BoxController {
   async store(req, res) {

        const box = await Box.create(req.body);
        return res.json(box);
    }

    async show(req, res) {
        const box = await Box.findById(req.params.id).populate({
            path: 'files',
            options: { sort: {createAt: -1}}
        });

        return res.json(box);
    }
}



module.exports = new BoxController();