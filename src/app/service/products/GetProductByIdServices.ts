import { Produto } from "../../../../prisma/prisma-client-js";
import ProductsRepository from "../../repository/products/ProductsRepository";

function GetProductByIdServices() {
    const execute = async (id: number): Promise<Produto> => {
        const product = await ProductsRepository.FindProductById(id);

        return product;
    };

    return { execute };
}

export default GetProductByIdServices();
