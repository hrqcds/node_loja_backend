import { ICreatePurchaseRequest } from "../app/repository/purchases/iPurchasesRespository";
import { ServerError } from "../infra/middlewares/ErrorMiddleware";

export default function ValidateCreatePurchase({
    status,
    tipo_pagamento,
    produtos,
}: Omit<ICreatePurchaseRequest, "total">) {
    if (!status || !["aguardando", "concluido"].includes(status)) {
        throw new ServerError("Status inválido");
    }

    if (
        !tipo_pagamento ||
        !["debito", "credito", "dinheiro"].includes(tipo_pagamento)
    ) {
        throw new ServerError("pagamento inválido");
    }

    if (produtos.length < 1) {
        throw new ServerError("Não há produtos na compra");
    }
}
