"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieController = void 0;
const routes_1 = require("../utils/routes");
const MovieService_1 = require("../services/MovieService");
class MovieController {
    constructor(app) {
        this.app = null;
        this.MovieService = new MovieService_1.MovieService();
        this.app = app;
    }
    /**
     * route
     */
    route() {
        this.AddMovies();
    }
    /**
     * @method: POST
     */
    AddMovies() {
        this.app.post(routes_1.Routes.ADD_MOVIE, (req, res) => __awaiter(this, void 0, void 0, function* () { }));
    }
}
exports.MovieController = MovieController;
