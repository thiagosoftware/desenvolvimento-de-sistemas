const multer  = require('multer');
const sharp = require('sharp');
const path = require('path');

const fs = require('fs');
 
const UploadController = {
    uploadImage: async (req, res) => {
        const imageName = req.file.originalname;
        const imageData = req.file.buffer;
 
        await sharp (imageData).toFile (`uploads/${imageName}`);
        return res.status(200).json({
            msg:'Imagem salva com sucesso!',
            status: 200
        })
 
    },
 
    listImages: async (req, res) => {
        fs.readdir('uploads/', (err, files) =>{
            if (err){
                return res.status(500).json({
                    msg: 'Erro ao listar imagens',
                });
                const images = files.filter(
                    (file) =>
                        file.endsWith(".jpg") ||
                        file.endsWith(".png") ||
                        file.endsWith(".jpeg")
                );
            }
            res.send('image')
        });
    },

    getImage: (req, res) => {
        const imageName = req.params.imageName
        const imagePath = path.join(__dirname, '..', '..', 'uploads', imageName);
        return res.sendFile(imagePath);
    }
}

module.exports = UploadController;