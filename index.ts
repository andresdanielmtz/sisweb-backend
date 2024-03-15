import express, { type Express } from 'express'
import apiRouter from './src/routes/index'
import morgan from 'morgan'

const app: Express = express()

const port = 3007

app.use(morgan('dev'))
app.use(express.json())
app.use(apiRouter)

app.listen(port, () => { console.log(`localhost:${port}`) })
