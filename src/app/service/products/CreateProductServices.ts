import { ServerError } from "../../../infra/middlewares/ErrorMiddleware";
import ValidateCreateProduct from "../../../utils/ValidateCreateProduct";
import { ICreateProductRequest } from "../../repository/products/iProductsRepository";
import ProductsRepository from "../../repository/products/ProductsRepository";

function CreateProductServices() {
    const execute = async ({
        nome,
        descricao,
        preco,
    }: ICreateProductRequest) => {
        // função responsável por validar os dados da requisição
        ValidateCreateProduct({ nome, descricao, preco });

        // Verificando se produto já existe no sistema
        const productExist = ProductsRepository.FindProductByName(nome);

        if (productExist) {
            throw new ServerError("Produto existente no sistema");
        }

        // Criando um novo produto
        const product = ProductsRepository.CreateProduct({
            nome,
            descricao,
            preco,
        });

        return product;
    };

    return { execute };
}

export default CreateProductServices();
