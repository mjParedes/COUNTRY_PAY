const userController = require('../controllers/user.controller');
const { createCard } = require('../controllers/card.controller');
const {updateAvatar} = require('../controllers/avatar.controller');
const avatarUpload = require('../middlewares/multer');
const {
    loginValidation,
    createUserValidation,
} = require('../middlewares/validated.middleware');
const { createCardValidation, AvatarValidation } = require('../middlewares/validated.middleware');
const {
    protectRoute,
    verifyAccountOwner,
} = require('../middlewares/auth.middleware');
module.exports = (app) => {
  app.get('/api', (req,res)=>{
    res.status(200).send({
        message: 'Welcome to the API',
    })
  })
  //User login

  app.post('/create', createUserValidation, userController.createUser);
  app.post('/login', loginValidation, userController.login);

  //Avatar
  
  app.put('/avatar/:id',AvatarValidation, avatarUpload ,updateAvatar)

  //Card

  app.post(
    '/create/:id/',
    createCardValidation,
    protectRoute,
    verifyAccountOwner,
    createCard,
);

  //********** */


  //********** */
}