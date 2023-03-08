export class Routes {
  //API VERSION
  private static _V = "/v1";

  //movie routes

  public static ADD_MOVIE = `${this._V}/movies`;
  public static GET_MOVIE = `${this._V}/movies/:id`;
  public static GET_ALL_MOVIES = `${this._V}/movies`;
  public static SEARCH_MOVIES_BY_TITLE = `${this._V}/movies?title=`;
  public static SEARCH_MOVIES_BY_GENRE = `${this._V}/movies?genre=`;
}
