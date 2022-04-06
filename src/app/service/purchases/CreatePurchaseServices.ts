import { ServerError } from "../../../infra/middlewares/ErrorMiddleware";
import ValidateCreatePurchase from "../../../utils/ValidateCreatePurchase";
import ValidateProducts from "../../../utils/ValidateProducts";
import ValidateTotal from "../../../utils/ValidateTotal";
import ProductsRepository from "../../repository/products/ProductsRepository";
import { ICreatePurchaseRequest } from "../../repository/purchases/iPurchasesRespository";
import PurchasesRepository from "../../repository/purchases/PurchasesRepository";

function CreatePucharseServices() {
    const execute = async ({
        tipo_pagamento,
        status,
        produtos,
    }: Omit<ICreatePurchaseRequest, "total">) => {
        ValidateCreatePurchase({ tipo_pagamento, status, produtos });
        const total = ValidateTotal(produtos);

        let compra = await PurchasesRepository.CreatePucharse({
            produtos,
            status,
            tipo_pagamento,
            total,
        });

        compra = await PurchasesRepository.FindPurchaseById(compra.id);

        return compra;
    };

    return { execute };
}

export default CreatePucharseServices();
