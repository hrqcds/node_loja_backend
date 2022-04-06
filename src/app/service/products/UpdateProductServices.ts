import { Produto } from "../../../../prisma/prisma-client-js";
import db from "../../../infra/database/db";
import { ServerError } from "../../../infra/middlewares/ErrorMiddleware";
import ValidateUpdateProduct from "../../../utils/ValidateUpdateProduct";
import { IUpdateProductRequest } from "../../repository/products/iProductsRepository";
import ProductsRepository from "../../repository/products/ProductsRepository";

function UpdateProductServices() {
    const execute = async (
        id: number,
        { nome, preco, descricao }: IUpdateProductRequest,
    ): Promise<Produto> => {
        ValidateUpdateProduct({ nome, descricao, preco });

        let productExist = await ProductsRepository.FindProductById(id);

        if (!productExist) {
            throw new ServerError("Produto não existe, impossível editar");
        }

        if (
            nome === productExist.nome &&
            productExist.descricao === descricao &&
            productExist.preco === preco
        ) {
            return productExist;
        }

        if (productExist.nome !== nome) {
            const productWithNameExist =
                await ProductsRepository.FindProductByName(nome);

            if (productWithNameExist) {
                throw new ServerError("Nome já cadastrado no sistema");
            }
        }

        await db.produto.update({
            data: { nome, preco, descricao },
            where: { id },
        });

        productExist = await db.produto.findUnique({ where: { id } });

        return productExist;
    };

    return { execute };
}

export default UpdateProductServices();
