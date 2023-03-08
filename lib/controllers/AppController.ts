import { Application, Request, Response } from "express";



export class AppController {
  public route(app: Application) {


    /**
     * Mismatch URL
     */
    app.all("*", (req: Request, res: Response) => {
      res.status(404).json({
        STATUS: "FAILURE",
        MESSAGE: "Invalid endpoint. Check your URL and try again.",
      });
    });
  }
}
