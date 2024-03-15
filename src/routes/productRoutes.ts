import { Router, type Request, type Response } from 'express'
const productRouter = Router()

productRouter.get('/', (req: Request, res: Response) => {
  res.send('GET /product')
})

productRouter.get('/:id', (req: Request, res: Response) => {
  const id: string = req.params.id
  res.send(`GET /product/${id}`)
})

productRouter.post('/', (req: Request, res: Response) => {
  res.send(`POST /product with ${req.body.id}, Creating the product ${req.body.name} with the values of ${req.body.price} and ${req.body.stock}`)
})

productRouter.patch('/:id', (req: Request, res: Response) => {
  res.send(`Update the product ${req.params.id} with the values of ${req.body.name}, ${req.body.price} and ${req.body.stock}`)
})

productRouter.delete('/', (req: Request, res: Response) => {
  res.send(`Deleting the product ${req.body.id}`)
})

export default productRouter
