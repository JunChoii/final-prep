"use client";
import React, { useState } from "react";
import { createUser } from "../actions";

export default function SignUp() {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleAdduser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("user name", userName);
    console.log("password", password);

    let res = await createUser({
      userName: userName,
      password: password,
    });

    if (res.success) {
      console.log("user created", res.success);
    } else {
      console.log("user not created", res.error);
    }
  };
  return (
    <form onSubmit={handleAdduser}>
      <input
        className="text-black"
        placeholder="user name"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      ></input>
      <input
        className="text-black"
        placeholder="password"
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>
      <input type="submit" value="signup"></input>
    </form>
  );
}
