import { Router } from "express";

export default interface IRoutes {
  getRoutes(): Router;
}
