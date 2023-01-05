import { Request, Response } from "express";

class HealthController {

    healthCheck(request:Request, response:Response) {
        response.json({message: "Server is up and running."});

    }

}

export default new HealthController();
