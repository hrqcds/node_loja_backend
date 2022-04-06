import { Status } from "../../prisma/prisma-client-js";

export default function ValidateStatusPayment(status: string): Status {
    if (status === "aguardando") {
        return Status.AGUARDANDO;
    }

    return Status.CONCLUIDO;
}
