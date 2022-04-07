import { Router } from "express";
import CreateProductController from "../../app/controller/products/CreateProductController";
import DeleteProductController from "../../app/controller/products/DeleteProductController";
import GetAllProductsController from "../../app/controller/products/GetAllProductsController";
import GetProductByIdController from "../../app/controller/products/GetProductByIdController";
import UpdateProductController from "../../app/controller/products/UpdateProductController";

const ProductRouter = Router();

ProductRouter.get("/", GetAllProductsController.handle);
ProductRouter.get("/find/:id", GetProductByIdController.handle);
ProductRouter.post("/create", CreateProductController.handle);
ProductRouter.put("/update/:id", UpdateProductController.handle);
ProductRouter.delete("/delete/:id", DeleteProductController.handle);

export { ProductRouter };
