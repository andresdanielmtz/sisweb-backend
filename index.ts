import express, { type Express } from 'express'
import apiRouter from './src/routes/index'
import morgan from 'morgan'
import connectionDB from './src/connection/connection'

const app: Express = express()
const port = 3008

app.use(morgan('dev'))
app.use(express.json())
app.use(apiRouter)

connectionDB()

app.listen(port, () => { console.log(`localhost:${port}`) })
