import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../utils/cloudinaryConfig.js';

// Configuring my cloudinary storage
const storage=new CloudinaryStorage({
    cloudinary: cloudinary,
    params: (req, file) => {
    const isVideo = file.mimetype.startsWith("video/");
    return {
      folder: "uploads",
      resource_type: isVideo ? "video" : "image",
      allowed_formats: ["jpg", "png", "jpeg", "mp4", "mov", "mkv", "webm", "avi"],
      public_id: Date.now().toString(),
    };
  }
});

const upload=multer({storage,
    limits: {
        fileSize: 10 * 1024 * 1024 // Limit file size to 10MB
    }
});

export default upload;