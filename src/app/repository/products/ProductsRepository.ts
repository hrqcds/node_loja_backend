import { Produto } from "../../../../prisma/prisma-client-js";
import db from "../../../infra/database/db";
import {
    ICreateProductRequest,
    IProductRepository,
    IUpdateProductRequest,
} from "./iProductsRepository";

// Responsável por se comunicar com o banco e interagir com produtos
function ProductRepository(): IProductRepository {
    // Busca todos os produtos
    const GetAllProducts = async (): Promise<Produto[]> => {
        const products = await db.produto.findMany({
            orderBy: { data_criacao: "asc" },
        });
        return products;
    };

    const FindProductById = async (id: number): Promise<Produto> => {
        const produto = await db.produto.findUnique({ where: { id } });

        return produto;
    };

    // Buscando um produto pelo nome
    const FindProductByName = async (name: string): Promise<Produto> => {
        const product = await db.produto.findFirst({ where: { nome: name } });

        return product;
    };

    // Recebendo parametros para criação de um novo produto
    const CreateProduct = async ({
        nome,
        descricao,
        preco,
    }: ICreateProductRequest): Promise<Produto> => {
        const product = await db.produto.create({
            data: {
                nome,
                descricao,
                preco,
            },
        });

        return product;
    };

    const UpdateProduct = async (
        id: number,
        { nome, descricao, preco }: IUpdateProductRequest,
    ) => {
        await db.produto.update({
            data: {
                nome,
                descricao,
                preco,
            },
            where: {
                id,
            },
        });
    };

    const DeleteProduct = async (id: number) => {
        await db.produto.delete({
            where: {
                id,
            },
        });
    };

    return {
        GetAllProducts,
        CreateProduct,
        FindProductByName,
        FindProductById,
        UpdateProduct,
        DeleteProduct,
    };
}

export default ProductRepository();
