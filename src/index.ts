import express, { NextFunction, Request, Response } from "express";
import productsRouters from "./routers/productsRouters";

const PORT = 8000;

const app = express();

app.use(express.json());

// application level middleware
// app.use((req: Request, res: Response, next: NextFunction) => {
//   console.log("ini adalah application level middleware");
//   next();
// });

app.get("/", (req, res) => {
  res.status(200).send("Welcome to my API");
});

app.use("/products", productsRouters);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err.message);
  res.status(400).send(err.message);
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
