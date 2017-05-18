import { NextFunction, Request, Response } from "express";
import * as fs from "fs";
import { verify } from "jsonwebtoken";
import * as path from "path";
import logger from "../logger";

const certPath = path.join(__dirname, "../../../resources/tsync.pem");
const cert = fs.readFileSync(certPath);

function authentication(req: Request, res: Response, next: NextFunction) {
  const token = req.get("tsync-auth");
  verify(token, cert, {
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
