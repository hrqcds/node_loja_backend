import { Request, Response } from "express";
import UpdatePurchasesService from "../../service/purchases/UpdatePurchasesService";

function UpdatePurchaseController() {
    const handle = async (req: Request, res: Response): Promise<Response> => {
        const { id } = req.params;
        const { status, tipo_pagamento } = req.body;

        const compra = await UpdatePurchasesService.execute(
            Number(id),
            status,
            tipo_pagamento,
        );

        return res.json({
            status: "success",
            compra,
        });
    };
    return { handle };
}

export default UpdatePurchaseController();
