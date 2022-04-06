import { Compra, Pagamento, Status } from "../../../../prisma/prisma-client-js";

export interface IPurchaseProduct {
    id: number;
    preco: number;
    quantidade: number;
}

export interface ICreatePurchaseRequest {
    tipo_pagamento: string;
    status: string;
    total: number;
    produtos: IPurchaseProduct[];
}

export interface IPurchaseRepository {
    CreatePucharse({
        total,
        produtos,
        status,
        tipo_pagamento,
    }: ICreatePurchaseRequest): Promise<Compra>;
    FindPurchaseById(id: number);
    FindAllPurchases();
    UpdatePurchase(id: number, status: Status, tipo_pagamento: Pagamento);
}
