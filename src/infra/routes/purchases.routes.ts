import { Router } from "express";
import CreatePurchaseController from "../../app/controller/purchases/CreatePurchaseController";
import DeletePurchaseController from "../../app/controller/purchases/DeletePurchaseController";
import FindPurchaseByIdController from "../../app/controller/purchases/FindPurchaseByIdController";
import GetAllPurchasesController from "../../app/controller/purchases/GetAllPurchasesController";
import UpdatePurchasesController from "../../app/controller/purchases/UpdatePurchasesController";

const PurchaseRouter = Router();

PurchaseRouter.get("/", GetAllPurchasesController.handle);
PurchaseRouter.get("/find/:id", FindPurchaseByIdController.handle);
PurchaseRouter.post("/create", CreatePurchaseController.handle);
PurchaseRouter.put("/update/:id", UpdatePurchasesController.handle);
PurchaseRouter.delete("/delete/:id", DeletePurchaseController.handle);

export { PurchaseRouter };
