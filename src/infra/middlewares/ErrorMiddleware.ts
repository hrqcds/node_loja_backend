import { NextFunction, Request, Response } from "express";

class ServerError {
    readonly message: string;
    readonly statusCode: number;

    constructor(message: string, statusCode = 400) {
        this.message = message;
        this.statusCode = statusCode;
    }
}

async function ErrorMiddleware(
    err: Error,
    req: Request,
    res: Response,
    _next: NextFunction,
): Promise<Response> {
    try {
        if (err instanceof ServerError) {
            return res.status(err.statusCode).json({
                status: "error",
                message: err.message,
            });
        }

        return res.status(500).json({
            status: "error",
            message: "server internal error",
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: "server internal error",
        });
    }
}

export { ServerError, ErrorMiddleware };
