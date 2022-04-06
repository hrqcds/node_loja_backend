import { Router } from "express";
import { ProductRouter } from "./products.routes";
import { PurchaseRouter } from "./purchases.routes";

const router = Router();

router.use("/produtos", ProductRouter);
router.use("/compras", PurchaseRouter);

export { router };
