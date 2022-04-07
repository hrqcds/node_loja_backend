import { Request, Response } from "express";
import DeleteProductServices from "../../service/products/DeleteProductServices";

function DeleteProductController() {
    const handle = async (req: Request, res: Response): Promise<Response> => {
        const { id } = req.params;

        await DeleteProductServices.execute(Number(id));

        return res.json({
            status: "success",
            message: "O produto foi apagado com sucesso",
        });
    };

    return { handle };
}

export default DeleteProductController();
