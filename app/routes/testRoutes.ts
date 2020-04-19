import TestController from "./../controllers/testController";
import express from "express";

export default function testRoutes (router: express.Router) :void {
  router
    .route("/api/test")
    .get(TestController.index);
};