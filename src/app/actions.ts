"use server";
import { db } from "@/db";
import { users } from "@/db/schema/users";
import { posts } from "@/db/schema/posts";
import { cookies } from "next/headers";
import { eq } from "drizzle-orm";
const bcrypt = require("bcrypt");
const saltRounds = 10;

export async function createPost({
  userId,
  content,
}: {
  userId: number;
  content: string;
}) {
  let postData;

  try {
    postData = await db
      .insert(posts)
      .values({ userId: userId, content: content })
      .returning()
      .run();
  } catch (err) {
    console.log(err);
    return { fail: "Fail ---- Post not added" };
  }
  return { success: "Success ---- Post added", postData: postData };
}

export async function createUser({
  userName,
  password,
}: {
  userName: string;
  password: string;
}) {
  let signedUser;
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);

    const signedUser = await db
      .insert(users)
      .values({ username: userName, password: hash })
      .returning()
      .run();

    cookies().set("user", userName);

    return { success: "User created successfully", data: { userName } };
  } catch (error) {
    return { error: "Error creating a user" };
  }
  return { success: "Success ---- User added", signedUser: signedUser };
}

export async function Login({
  userName,
  password,
}: {
  userName: string;
  password: string;
}) {
  try {
    let currentUser = await db
      .select()
      .from(users)
      .where(eq(users.username, userName))
      .then((res) => res[0]);
    if (currentUser && bcrypt.compareSync(password, currentUser.password)) {
      cookies().set("user_auth", currentUser.password);
      return { Success: "Success ---- Logged in" };
    } else {
      throw new Error("Unable to login");
    }
  } catch (err) {
    return { Fail: "Fail ---- User not logged in" };
  }
}

export async function getAllPosts() {}

export async function getSinglePost() {}
