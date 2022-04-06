import { IPurchaseProduct } from "../app/repository/purchases/iPurchasesRespository";

export default function ValidateTotal(produtos: IPurchaseProduct[]): number {
    const total = produtos.reduce((acc, p) => {
        return acc + p.preco * p.quantidade;
    }, 0);

    return total;
}
