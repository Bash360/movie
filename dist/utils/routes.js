"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
class Routes {
}
exports.Routes = Routes;
_a = Routes;
//API VERSION
Routes._V = "/v1";
//movie routes
Routes.ADD_MOVIE = `${_a._V}/movies`;
Routes.GET_MOVIE = `${_a._V}/movies/:id`;
Routes.GET_ALL_MOVIES = `${_a._V}/movies`;
Routes.SEARCH_MOVIES_BY_TITLE = `${_a._V}/movies?title=`;
Routes.SEARCH_MOVIES_BY_GENRE = `${_a._V}/movies?genre=`;
