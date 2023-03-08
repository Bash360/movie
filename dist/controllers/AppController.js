"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
class AppController {
    route(app) {
        /**
         * Mismatch URL
         */
        app.all("*", (req, res) => {
            res.status(404).json({
                STATUS: "FAILURE",
                MESSAGE: "Invalid endpoint. Check your URL and try again.",
            });
        });
    }
}
exports.AppController = AppController;
