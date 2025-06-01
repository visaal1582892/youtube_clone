import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../utils/cloudinaryConfig.js';

// Configuring my cloudinary storage
const storage=new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        // Cloudinary Folder name
        folder: 'uploads',
        // allowing only image formats
        allowed_formats: ['png','jpg','jpeg']
    }
});

const upload=multer({storage});

export default upload;