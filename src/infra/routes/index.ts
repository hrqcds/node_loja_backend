import { Router } from "express";
import { ProductRouter } from "./products.routes";

const router = Router();

router.use("/produtos", ProductRouter);

export { router };
