import PurchasesRepository from "../../repository/purchases/PurchasesRepository";

function GetAllPurchasesServices() {
    const execute = async () => {
        const purchases = await PurchasesRepository.FindAllPurchases();
        return purchases;
    };

    return { execute };
}

export default GetAllPurchasesServices();
