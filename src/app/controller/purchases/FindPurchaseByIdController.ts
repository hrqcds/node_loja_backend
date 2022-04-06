import { Request, Response } from "express";
import FindPurchaseByIdService from "../../service/purchases/FindPurchaseByIdService";

function FindPurchaseByIdController() {
    const handle = async (req: Request, res: Response): Promise<Response> => {
        const { id } = req.params;

        const compra = await FindPurchaseByIdService.execute(Number(id));

        return res.json({
            status: "success",
            compra,
        });
    };

    return { handle };
}

export default FindPurchaseByIdController();
