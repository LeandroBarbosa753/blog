import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import prisma from "../../prisma/db";


/* gerar random Key on https://randomkeygen.com/ */ 
export const SECRET_KEY = "[Q!Pcp.b+?Wt3<pr^q(Isb&ZV$]<_T";

export async function signinController(request: Request, response: Response) {
  const { email, password } = request.body;

  const userExist = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  if (!userExist) {
    return response.status(400).json({ error: "Credenciais inválidas" });
  }

  const isValidPassword = await bcrypt.compare(password, userExist.password);

  if (!isValidPassword) {
    return response.status(400).json({ error: "Credenciais inválidas" });
  }

  const token = await jwt.sign({
    id: userExist.id,
    name: userExist.name,
    email: userExist.email,
  }, 
  SECRET_KEY);

  return response.json({ token });
}
