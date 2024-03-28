import { NextFunction, Request, Response } from "express";
import fs from "fs";
import path from "path";
import { Data } from "./types";

const filePath = path.join(__dirname, "../../../db.json");

export const createProduct = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const rawData = fs.readFileSync(filePath).toString();
    const parsedData: Data = JSON.parse(rawData);
    req.body.id = parsedData.products[parsedData.products.length - 1].id + 1;

    parsedData.products.push(req.body);

    fs.writeFileSync(filePath, JSON.stringify(parsedData));

    res.send("add product success");
  } catch (error) {
    next(error);
  }
};
