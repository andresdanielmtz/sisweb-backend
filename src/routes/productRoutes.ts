import { Router, type Request, type Response } from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  deleteProduct,
  modifyProduct,
} from "../controller/productControler";
const productRouter = Router();

productRouter.get("/", getAllProducts);

productRouter.get("/:id", getProductById);

productRouter.post("/", createProduct);

productRouter.patch("/:id", modifyProduct);

productRouter.delete("/", deleteProduct);

export default productRouter;
