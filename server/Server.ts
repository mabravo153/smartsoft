import express from "express";
import cors from "cors";
import { createConnection } from "typeorm";
import ProductRoute from "../routes/ProductRoute";
import AuthRoute from "../routes/AuthRoute";
import errorHandlerMiddleware from "../middlewares/error-handler";
import PurchaseRoute from "../routes/PurchaseRoute";
import notFound from "../middlewares/route";

class Server {
  private app: express.Application;
  private port: string;
  private routesAPI: { [key: string]: string } = {
    auth: "/api/v1/auth",
    products: "/api/v1/products",
    orders: "/api/v1/orders",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "6000";
    this.middlewares();
    this.routes();
    this.errors();
  }

  run(): void {
    this.app.listen(this.port, () => {
      console.log(`server up since port ${this.port}`);
      this.dbConnection();
    });
  }

  middlewares(): void {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes(): void {
    this.app.use(this.routesAPI.auth, new AuthRoute().getRoutes());
    this.app.use(this.routesAPI.products, new ProductRoute().getRoutes());
    this.app.use(this.routesAPI.orders, new PurchaseRoute().getRoutes());
  }

  errors(): void {
    this.app.use(notFound);
    this.app.use(errorHandlerMiddleware);
  }

  async dbConnection(): Promise<void> {
    try {
      await createConnection();
    } catch (error) {
      console.log(`Error ${error}`);
      setTimeout(() => {
        this.dbConnection();
      }, 2000);
    }
  }
}

export default Server;
