import ValidateStatusPayment from "../../../utils/ValidateStatusPayment";
import ValidateTypePayment from "../../../utils/ValidateTypePayment";
import PurchasesRepository from "../../repository/purchases/PurchasesRepository";

function UpdatePurchasesService() {
    const execute = async (
        id: number,
        status: string,
        tipo_pagamento: string,
    ) => {
        const s = ValidateStatusPayment(status);
        const t = ValidateTypePayment(tipo_pagamento);

        await PurchasesRepository.UpdatePurchase(id, s, t);

        const purchase = PurchasesRepository.FindPurchaseById(id);

        return purchase;
    };

    return { execute };
}

export default UpdatePurchasesService();
