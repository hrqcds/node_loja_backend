import PurchasesRepository from "../../repository/purchases/PurchasesRepository";

function FindPurchaseById() {
    const execute = async (id: number) => {
        const purchase = await PurchasesRepository.FindPurchaseById(id);

        return purchase;
    };

    return { execute };
}

export default FindPurchaseById();
