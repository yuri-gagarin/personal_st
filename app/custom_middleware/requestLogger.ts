import { Request, Response, NextFunction } from "express";

export default function customLogger (req: Request, res: Response, next: NextFunction): void {
  console.log(`Server request: ${req.method}`);
  console.log(`Request URL: ${req.path}`);
  //console.log(req);
  next();
};

