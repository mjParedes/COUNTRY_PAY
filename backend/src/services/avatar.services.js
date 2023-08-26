const db = require('../models/index');
const AppError = require('../helpers/AppError');
const cloudinary = require('../config/cloudinary').v2
class AvatarServices {
    async updateAvatar ({user_id, newAvatarFile, next}){
        try {
            if (!newAvatarFile) {
                return next(
                    new AppError(`"No image file provided": ${newAvatarFile} not found`, 400),
                )
            }
            //Subir la nueva imagen a Cloudinary
            const result = await cloudinary.uploader.upload(newAvatarFile.path)

            // Obtener la URL de la nueva imagen de Cloudinary
            const avatarUrl = result.secure_url;

            // Actualizar el campo 'avatar' del usuario en la base de datos
            const updateUser = await db.User.update(
                {avatar:avatarUrl},
                {where: {id:user_id}}
            )
            return updateUser;
        } catch (error) {
            throw new Error(error);
        }
    }

    async deletAvatar(){
      try {
        
      } catch (error) {
        
      }
    }
}

module.exports = AvatarServices;