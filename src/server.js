import express from 'express'
import path from 'path'
import {routes} from './routes/routes'
//let mustacheExpress=require('mustache-express')

const app =express()


const dir=path.join(__dirname,'../','public')
let port=process.env.PORT || 3000






app.use(express.urlencoded({extended:true}))

app.use(express.static(dir))
app.use(routes)





//app.listen(port,()=>console.log(`server at running in the port ${port}`))

const server=require('http').Server(app)


module.exports={server,port}
