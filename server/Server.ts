import express from "express";
import cors from "cors";
import { createConnection } from "typeorm";
import ProductRoute from "../routes/ProductRoute";
import errorHandlerMiddleware from "../middlewares/error-handler";

class Server {
  private app: express.Application;
  private port: string;
  private routesAPI: { [key: string]: string } = {
    users: "/api/v1/users",
    products: "/api/v1/products",
    orders: "/api/v1/orders",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "9000";
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
    // this.app.use(this.routesAPI.users);
    this.app.use(this.routesAPI.products, new ProductRoute().getRoutes());
    // this.app.use(this.routesAPI.order);
  }

  errors(): void {
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
