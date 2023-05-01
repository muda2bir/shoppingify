import { Request, Response } from "express";

export function handleUserRegistration(req: Request, res: Response) {
  res.send("Registering the User!");
}

export function handleUserLogin(req: Request, res: Response) {
  res.send("Logging in the User!");
}
