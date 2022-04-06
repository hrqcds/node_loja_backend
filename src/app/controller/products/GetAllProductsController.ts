import { Request, Response } from "express";
import GetAllProductsService from "../../service/products/GetAllProductsServices";

function GetAllProductsController() {
    const handle = async (req: Request, res: Response): Promise<Response> => {
        const produtos = await GetAllProductsService.execute();

        return res.status(200).json({
            status: "success",
            produtos,
        });
    };

    return { handle };
}

export default GetAllProductsController();
