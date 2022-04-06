import "dotenv/config";
import cors from "cors";
import express from "express";
import "express-async-errors";
import config from "../../../config/server";
import { ErrorMiddleware } from "../../middlewares/ErrorMiddleware";
import { router } from "../../routes";

const server = express();

server.use(cors());
server.use(express.json());
server.use(router);
server.use(ErrorMiddleware);

server.listen(config.port, () => {
    console.log(`Server is running in port ${config.port}`);
    console.log(`Access: http://localhost:${config.port}`);
});
