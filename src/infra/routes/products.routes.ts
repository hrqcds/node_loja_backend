import { Router } from "express";
import CreateProductController from "../../app/controller/products/CreateProductController";
import GetAllProductsController from "../../app/controller/products/GetAllProductsController";
import UpdateProductController from "../../app/controller/products/UpdateProductController";

const ProductRouter = Router();

ProductRouter.get("/", GetAllProductsController.handle);
ProductRouter.get("/find/:id", GetAllProductsController.handle);
ProductRouter.post("/create", CreateProductController.handle);
ProductRouter.put("/update/:id", UpdateProductController.handle);

export { ProductRouter };
