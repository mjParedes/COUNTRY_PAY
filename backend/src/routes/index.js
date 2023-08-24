// module.exports = (app) => {
//   app.get('/api', (req,res)=>{
//     res.status(200).send({
//         message: 'Welcome to the API',
//     })
//   })
//   //User login

//   //+++++

//   //+++++
// }

const express = require('express');
const userRoutes = require('./user.routes');
const otherRoutes = require('./card.routes');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send({
        message: 'Welcome to the API',
    });
});

router.use('/users', userRoutes);
router.use('/cards', otherRoutes);

module.exports = router;
