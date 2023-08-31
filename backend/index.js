"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_conn_1 = __importDefault(require("./models/db/db.conn"));
const api_routes_1 = __importDefault(require("./routes/api.routes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = 5000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
(0, db_conn_1.default)()
    .then(() => {
    console.log(`database loading...`);
    app.use(api_routes_1.default);
    app.listen(PORT, () => console.log(`server loading on PORT ${PORT}`));
});
