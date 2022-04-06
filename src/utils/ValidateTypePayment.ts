import { Pagamento } from "../../prisma/prisma-client-js";

export default function ValidateTypePayment(tipo_pagamento: string): Pagamento {
    if (tipo_pagamento === "debito") {
        return Pagamento.DEBITO;
    }
    if (tipo_pagamento === "credito") {
        return Pagamento.CREDITO;
    }
    return Pagamento.DINHEIRO;
}
