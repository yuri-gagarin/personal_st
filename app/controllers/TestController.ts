import { Request, Response } from "express";

class TestController {

  static index = (req: Request, res: Response): Response => {
    return res.json({
      message: "test successful"
    });
  }
};

export default TestController;
