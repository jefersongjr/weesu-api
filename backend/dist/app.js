"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.App = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const UserRoutes_1 = require("./routes/UserRoutes");
const ProductRoutes_1 = require("./routes/ProductRoutes");
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.app.use(body_parser_1.default.json());
        this.app.use(UserRoutes_1.userRouter);
        this.app.use(ProductRoutes_1.productRouter);
        this.app.use((req, res) => {
            res.status(404).send('Page Not Found');
        });
        this.routes();
    }
    config() {
        this.app.use((0, cors_1.default)({
            origin: 'http://localhost:5173',
            methods: 'GET,POST,PUT,DELETE',
            allowedHeaders: 'Content-Type,Authorization',
        }));
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.get('/', (req, res) => res.json({ ok: true }));
    }
    start(PORT) {
        this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
    }
}
exports.App = App;
exports.app = new App().app;
//# sourceMappingURL=app.js.map