import ProductsRepository from "../../repository/products/ProductsRepository";

function DeleteProductServices() {
    const execute = async (id: number) => {
        await ProductsRepository.DeleteProduct(id);

        return "success";
    };

    return { execute };
}

export default DeleteProductServices();
