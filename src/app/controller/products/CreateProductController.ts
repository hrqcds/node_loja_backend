import { Request, Response } from "express";
import CreateProductServices from "../../service/products/CreateProductServices";

function CreateProductController() {
    const handle = async (req: Request, res: Response): Promise<Response> => {
        const { nome, descricao, preco } = req.body;

        const produto = await CreateProductServices.execute({
            nome,
            descricao,
            preco,
        });

        return res.status(201).json({
            status: "success",
            produto,
        });
    };

    return { handle };
}

export default CreateProductController();
