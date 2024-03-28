import { NextFunction, Request, Response } from "express";
import fs from "fs";
import path from "path";
import { Data } from "./types";

const filePath = path.join(__dirname, "../../../db.json");

export const updateProduct = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const rawData = fs.readFileSync(filePath).toString();
    const parsedData: Data = JSON.parse(rawData);
    const id = Number(req.params.id);

    const index = parsedData.products.findIndex((product) => product.id === id);
    if (index === -1) {
      throw new Error(`product with id ${id} not found`);
    }

    parsedData.products[index] = { ...req.body, id };
    fs.writeFileSync(filePath, JSON.stringify(parsedData));
    res.status(200).send({
      message: "update user succes",
    });
  } catch (error) {
    next(error);
  }
};
