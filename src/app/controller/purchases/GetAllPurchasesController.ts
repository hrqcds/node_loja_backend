import { Request, Response } from "express";
import GetAllPurchasesServices from "../../service/purchases/GetAllPurchasesServices";

function GetAllPurchasesController() {
    const handle = async (req: Request, res: Response): Promise<Response> => {
        const compras = await GetAllPurchasesServices.execute();

        return res.json({
            status: "success",
            compras,
        });
    };

    return { handle };
}

export default GetAllPurchasesController();
