import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import logger from "../logger";
import jwtPublicKey from "./jwtPublicKey";

function authentication(req: Request, res: Response, next: NextFunction) {
  const token = req.get("authorization-tsync");
  verify(token, jwtPublicKey, {
    algorithms: ["RS256"],
    audience: "pkeI_yMD6HuLsf12zPy_yPvL1-yvNZHZ",
    clockTolerance: 300,
    issuer: "https://tsync.eu.auth0.com/",
    maxAge: "7d",
  }, (err, decoded) => {
    if (err) {
      logger.debug("Error while verifying JWT:", err);
      res.status(401).send();
    } else {
      next();
    }
  });
}

export default authentication;
