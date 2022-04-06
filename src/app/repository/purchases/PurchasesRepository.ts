import { Compra, Pagamento, Status } from "../../../../prisma/prisma-client-js";
import db from "../../../infra/database/db";
import ValidateStatusPayment from "../../../utils/ValidateStatusPayment";
import ValidateTypePayment from "../../../utils/ValidateTypePayment";
import {
    ICreatePurchaseRequest,
    IPurchaseRepository,
} from "./iPurchasesRespository";

function PurchasesRepository(): IPurchaseRepository {
    const CreatePucharse = async ({
        total,
        status,
        produtos,
        tipo_pagamento,
    }: ICreatePurchaseRequest): Promise<Compra> => {
        const tipo = ValidateTypePayment(tipo_pagamento);
        const s = ValidateStatusPayment(status);

        const compra = await db.compra.create({
            data: {
                total,
                tipo_pagamento: tipo,
                status: s,
            },
        });

        produtos.forEach(async (p) => {
            const productExist = await db.produto.findFirst({
                where: { id: p.id },
            });

            if (!productExist) {
                return;
            }

            await db.listaDeProdutos.create({
                data: {
                    compraId: compra.id,
                    produtoId: p.id,
                    quantidade: p.quantidade,
                },
            });
        });

        return compra;
    };

    const FindPurchaseById = async (id: number) => {
        const compra = await db.compra.findUnique({
            where: { id },
            include: {
                listaDeProdutos: true,
            },
        });

        return compra;
    };

    const FindAllPurchases = async () => {
        const purchases = await db.compra.findMany({
            include: {
                listaDeProdutos: {
                    include: {
                        produto: true,
                    },
                },
            },
        });

        return purchases;
    };

    const UpdatePurchase = async (
        id: number,
        status: Status,
        tipo_pagamento: Pagamento,
    ) => {
        await db.compra.update({
            where: { id },
            data: { status, tipo_pagamento },
        });
    };

    return {
        CreatePucharse,
        FindPurchaseById,
        FindAllPurchases,
        UpdatePurchase,
    };
}

export default PurchasesRepository();
