import { ICreateProductRequest } from "../app/repository/products/iProductsRepository";
import { ServerError } from "../infra/middlewares/ErrorMiddleware";

export default function ValidateUpdateProduct(data: ICreateProductRequest) {
    if (!data.nome && !data.preco) {
        throw new ServerError("Parametros inválidos");
    }

    if (data.nome.length < 2) {
        throw new ServerError("Nome do produto muito curto");
    }

    if (typeof data.preco !== "number") {
        throw new ServerError("Preço só pode ser um número");
    }

    if (data.preco < 1) {
        throw new ServerError("Preço não pode ser inferior a 1");
    }
}
