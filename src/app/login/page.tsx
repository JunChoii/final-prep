"use client";
import React, { useState } from "react";
import { Login as signedUser } from "../actions";

export default function Login() {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLoginUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("user name", userName);
    console.log("password", password);

    let res = await signedUser({
      userName: userName,
      password: password,
    });
  };
  return (
    <form onSubmit={handleLoginUser}>
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
      <input type="submit" value="login"></input>
    </form>
  );
}
