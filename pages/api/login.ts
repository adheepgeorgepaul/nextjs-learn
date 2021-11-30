// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

const KEY = "sdfsdffsdfgdgdfhuyjujuyukiyku";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!req.body) {
    res.statusCode = 404;
    res.end("ERROR");
    return;
  }
  const { userName, password } = req.body;
  res.json({
    token: jwt.sign(
      {
        userName,
        admin: userName === "admin" && password === "admin",
      },
      KEY
    ),
  });
}
