import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/index.module.scss";
import jwt from "jsonwebtoken";

export default function Home() {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("You are not logged in ");

  const submitForm = async () => {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, password }),
    }).then((t) => t.json());

    const token = res.token;

    if (token) {
      const json = jwt.decode(token) as { [key: string]: string };
      setMessage(
        `Welcome ${json.userName} and you are ${
          json.admin ? "an admin" : "not an admin"
        } `
      );
    } else {
      setMessage("something went wrong");
    }
  };
  return (
    <div>
      <h1>{message}</h1>
      <form method="POST" action="/api/login">
        <input
          name="username"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="button" value="login" onClick={submitForm} />
      </form>

      <Link href="/test" passHref={true}>
        <h1>Test Page </h1>
      </Link>
    </div>
  );
}
