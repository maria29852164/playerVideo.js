import {Router} from 'express'

import {index} from '../controller/controller'

const routes=Router()


routes.get('/',index)




module.exports ={routes};