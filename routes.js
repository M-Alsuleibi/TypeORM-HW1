// routes.ts
import { Router } from "express";
import { getRepository } from "typeorm";
import User from "./entities/User";

const router = Router();

router.post("/register", async (req, res) => {
  const userRepository = getRepository(User);

  const { username, password } = req.body;

  const newUser = userRepository.create({
    username,
    password,
  });

  await userRepository.save(newUser);

  res.status(201).json({ message: "User registered successfully" });
});

export default router;