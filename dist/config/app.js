"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = void 0;
const express_1 = __importDefault(require("express"));
const AppController_1 = require("../controllers/AppController");
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const MovieController_1 = require("../controllers/MovieController");
dotenv_1.default.config();
class App {
    constructor() {
        this.mongoUrl = process.env.MONGO_DB_URI;
        /**
         * Declare controllers objects.
         * */
        this.commonRoutes = new AppController_1.AppController();
        this.app = (0, express_1.default)();
        this.config();
        this.mongoSetup();
        this.initRouteClasses();
        this.useRoutes();
    }
    /**
     * Initialize all controllers classes.
     * */
    initRouteClasses() {
        this.MovieRoutes = new MovieController_1.MovieController(this.app);
    }
    /**
     * Kindly list your controllers
     * Note: No route should be listed below the commonRoutes
     */
    useRoutes() {
        this.MovieRoutes.route();
        this.commonRoutes.route(this.app);
    }
    config() {
        this.app.use((0, cors_1.default)({
            origin: "*",
            methods: "GET,POST,PUT,DELETE,PATCH",
            credentials: true,
        }));
        this.app.enable("trust proxy");
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    mongoSetup() {
        mongoose_1.default
            .connect(this.mongoUrl)
            .then(() => console.log("DB Connection Successful!"))
            .catch((err) => {
            console.log(err);
        });
    }
}
exports.PORT = 5000;
exports.default = new App().app;
