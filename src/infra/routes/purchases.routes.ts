import { Router } from "express";
import CreatePurchaseController from "../../app/controller/purchases/CreatePurchaseController";
import FindPurchaseByIdController from "../../app/controller/purchases/FindPurchaseByIdController";
import GetAllPurchasesController from "../../app/controller/purchases/GetAllPurchasesController";
import UpdatePurchasesController from "../../app/controller/purchases/UpdatePurchasesController";

const PurchaseRouter = Router();

PurchaseRouter.get("/", GetAllPurchasesController.handle);
PurchaseRouter.get("/find/:id", FindPurchaseByIdController.handle);
PurchaseRouter.post("/create", CreatePurchaseController.handle);
PurchaseRouter.put("/update/:id", UpdatePurchasesController.handle);

export { PurchaseRouter };
