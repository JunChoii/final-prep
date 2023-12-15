"use client";
import React, { useState } from "react";
import { createPost as createPostAction } from "../actions";

export default function createPost() {
  const [userId, setUserId] = useState<number>(0);
  const [content, setContent] = useState<string>("");

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(content, userId);
    const res = await createPostAction({ userId, content });
    if (res) {
      console.log("res.postData----->", res.postData);
    } else {
      console.log("error");
    }
  };
  return (
    <form
      onSubmit={handleCreatePost}
      className="flex min-h-screen flex-col items-center justify-between p-24"
    >
      <input
        className="text-black"
        type="number"
        onChange={(e) => {
          setUserId(parseInt(e.target.value));
        }}
        placeholder="user id"
      ></input>
      <input
        className="text-black"
        type="text"
        onChange={(e) => {
          setContent(e.target.value);
        }}
        placeholder="content id"
      ></input>

      <button type="submit">Create Post</button>
    </form>
  );
}
