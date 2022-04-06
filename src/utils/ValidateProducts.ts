import ProductsRepository from "../app/repository/products/ProductsRepository";
import { IPurchaseProduct } from "../app/repository/purchases/iPurchasesRespository";
import { ServerError } from "../infra/middlewares/ErrorMiddleware";

export default async function ValidateProducts(products: IPurchaseProduct) {
    const productExist = await ProductsRepository.FindProductById(products.id);

    if (!productExist) {
        throw new ServerError("Produto não existe no sistema");
    }
}
