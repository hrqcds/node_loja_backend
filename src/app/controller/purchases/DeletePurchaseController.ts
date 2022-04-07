import { Request, Response } from "express";
import DeletePurchaseServices from "../../service/purchases/DeletePurchaseServices";
function DeletePurchaseController() {
    const handle = async (req: Request, res: Response): Promise<Response> => {
        const { id } = req.params;

        const compra = await DeletePurchaseServices.execute(Number(id));

        return res.json({
            status: "success",
            compra,
        });
    };

    return { handle };
}

export default DeletePurchaseController();
