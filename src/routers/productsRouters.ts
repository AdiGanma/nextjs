import express, { NextFunction, Request, Response } from "express";
import { getProducts } from "../controllers/products/getProducts";
import { getProduct } from "../controllers/products/getProduct";
import { createProduct } from "../controllers/products/createProduct";
import { updateProduct } from "../controllers/products/updateProduct";
import { deleteProduct } from "../controllers/products/deleteProduct";

const router = express.Router();

router.get(
  "/",
  //   route level middleware
  (req: Request, res: Response, next: NextFunction) => {
    console.log("ini middleware 1");
    next();
  },
  (req: Request, res: Response, next: NextFunction) => {
    console.log("ini middleware 2");
    next();
  },
  getProducts
);
router.get("/:id", getProduct);
router.post("/", createProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
