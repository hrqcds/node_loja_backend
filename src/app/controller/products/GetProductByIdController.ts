import { Request, Response } from "express";
import GetProductByIdServices from "../../service/products/GetProductByIdServices";

function GetProductByIdController() {
    const handle = async (req: Request, res: Response): Promise<Response> => {
        const { id } = req.params;

        const produto = await GetProductByIdServices.execute(Number(id));

        return res.json({
            status: "success",
            produto,
        });
    };

    return { handle };
}

export default GetProductByIdController();
