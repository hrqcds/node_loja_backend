import { Produto } from "../../../../prisma/prisma-client-js";

export interface ICreateProductRequest {
    nome: string;
    descricao: string;
    preco: number;
}

export interface IUpdateProductRequest {
    nome: string;
    descricao: string;
    preco: number;
}

export interface IProductRepository {
    GetAllProducts(): Promise<Produto[]>;
    FindProductById(id: number): Promise<Produto>;
    FindProductByName(name: string): Promise<Produto>;
    CreateProduct(data: ICreateProductRequest): Promise<Produto>;
    UpdateProduct(id: number, data: IUpdateProductRequest);
}
