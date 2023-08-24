const userController = require('../controllers/user.controller');
const {
    loginValidation,
    createUserValidation,
} = require('../middlewares/validated.middleware');
module.exports = (app) => {
  app.get('/api', (req,res)=>{
    res.status(200).send({
        message: 'Welcome to the API',
    })
  })
  //User login
  app.post('/create', createUserValidation, userController.createUser);
  app.post('/login', loginValidation, userController.login);
  //+++++

  //+++++
}