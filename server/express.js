import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import Template from './../template'
import userRoutes from './routes/user.routes'

const app = express()

// parse body params and attache them to req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
// secure apps by setting various HTTP Headers
app.use(helmet())

// enable CORS - Cross Orign Resouce Sharing
app.use(cors())

// mount routes
app.use('/', userRoutes)

app.get('/', (req, res) => {
    res.status(200).send(Template())
})

export default app