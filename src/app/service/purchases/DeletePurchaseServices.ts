import PurchasesRepository from "../../repository/purchases/PurchasesRepository";

function DeletePurchasesServices() {
    const execute = async (id: number) => {
        await PurchasesRepository.DeletePurchase(id);

        return "Compra deletada com sucesso";
    };

    return { execute };
}

export default DeletePurchasesServices();
