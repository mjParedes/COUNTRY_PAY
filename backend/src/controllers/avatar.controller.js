const AvatarServices = require('../services/avatar.services');
const avatarServices = new AvatarServices();

exports.updateAvatar = async (req,res,next) => {
    const user_id = req.user.id // id del usuario logeado
    const newAvatarFile = req.file; // Archivo de imagen subido

    try {
        const updateUser = await avatarServices.updateAvatar(user_id,newAvatarFile);
        res.status(200).json({
            status: 'success',
            message: 'Avatar updated successfully',
            user: updateUser,
        });
    } catch (error) {
        console.error('Error updating avatar:', error);
        res.status(500).json({
            status: 'error',
            message: 'An error occurred while updating the avatar',
        });
    }
}