import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { D
  ata } from "./types";

const filePath = path.join(__dirname, "../../../db.json");

export const getProducts = (req: Request, res: Response) => {
  const rawData = fs.readFileSync(filePath).toString();
  const { products }: Data = JSON.parse(rawData);

  res.status(200).send({
    message: "succes",
    data: products,
  });
};
