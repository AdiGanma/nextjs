import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { Data } from "./types";

const filePath = path.join(__dirname, "../../../db.json");

export const getProduct = (req: Request, res: Response) => {
  const rawData = fs.readFileSync(filePath).toString();
  const parsedData: Data = JSON.parse(rawData);
  const id = Number(req.params.id);

  const result = parsedData.products.find((product) => product.id === id);
  if (!result) {
    return res.status(400).send(`product with id ${id} not found`);
  }
  res.status(200).send(result);
};
