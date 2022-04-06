import { Request, Response } from "express";
import CreatePurchaseServices from "../../service/purchases/CreatePurchaseServices";

function CreatePucharseController() {
    const handle = async (req: Request, res: Response): Promise<Response> => {
        const { tipo_pagamento, status, produtos } = req.body;

        const compra = await CreatePurchaseServices.execute({
            tipo_pagamento,
            status,
            produtos,
        });

        return res.json({
            status: "success",
            compra,
        });
    };

    return { handle };
}

export default CreatePucharseController();
