import { Produto } from "../../../../prisma/prisma-client-js";
import ProductRepository from "../../repository/products/ProductsRepository";

function GetAllProductsService() {
    const execute = async (): Promise<Produto[]> => {
        // Buscando todos os produtos
        const products = await ProductRepository.GetAllProducts();

        return products;
    };

    return { execute };
}

export default GetAllProductsService();
