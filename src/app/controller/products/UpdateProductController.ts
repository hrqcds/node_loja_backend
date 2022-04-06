import { Request, Response } from "express";
import UpdateProductServices from "../../service/products/UpdateProductServices";

function UpdateProductController() {
    const handle = async (req: Request, res: Response): Promise<Response> => {
        const { id } = req.params;
        const { nome, descricao, preco } = req.body;

        const produto = await UpdateProductServices.execute(Number(id), {
            nome,
            descricao,
            preco,
        });

        return res.json({
            status: "success",
            produto,
        });
    };

    return { handle };
}

export default UpdateProductController();
