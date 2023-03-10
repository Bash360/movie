export class Routes {
  //API VERSION
  private static _V = "/api/v1";

  //movie routes

  public static ADD_MOVIE = `${this._V}/movies`;
  public static GET_MOVIE = `${this._V}/movies/:id`;
  public static GET_ALL_MOVIES = `${this._V}/movies`;
  public static SEARCH_MOVIES_BY_TITLE = `${this._V}/movies/search_by_title`;
  public static SEARCH_MOVIES_BY_GENRE = `${this._V}/movies/search_by_genre`;
}
