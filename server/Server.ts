import express from "express";

class Server {
  private app: express.Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "9000";
  }

  run(): void {
    this.app.listen(this.port, () => {
      console.log(`server up since port ${this.port}`);
    });
  }
}

export default Server;
