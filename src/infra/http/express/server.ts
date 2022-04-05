import "dotenv/config";
import cors from "cors";
import express from "express";
import "express-async-errors";
import { ErrorMiddleware } from "../../middlewares/ErrorMiddleware";
import { router } from "../../routes";

const server = express();
const port = process.env.SERVER_PORT || 4000;

server.use(cors());
server.use(express.json());
server.use(router);
server.use(ErrorMiddleware);

server.listen(port, () => {
    console.log(`Server is running in port${port}`);
    console.log(`Access: http://localhost:${port}`);
});
