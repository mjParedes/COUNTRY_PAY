const { Router } = require('express')
const UserRouter = require('./user.routes')
const CardRouter = require('./card.routes')
const SessionRouter = require('./session.routes')


const routerApi = Router()

//rutas de user
routerApi.use('/user', UserRouter)

//rutas de cards
routerApi.use('/card', CardRouter)

//rutas de sessions
routerApi.use('/sessions', SessionRouter)


module.exports = routerApi
