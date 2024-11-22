import express from 'express'
import cors from 'cors'
import productsRouter from './modules/products/productsRoute'
const app = express()

app.use(express.json())
app.use(cors())


app.use('/api/v1/products', productsRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

export default app

