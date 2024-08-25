import { NextRequest } from "next/server";
import { serialize } from "cookie";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const password = body.password;

  if (password === process.env.ADMIN_PASSWORD!) {
    const cookie = serialize(process.env.PASSWORD_COOKIE!, "admin", { httpOnly: true, path: "/" });
    return new Response("Welcome, Isabelle!", { status: 200, headers: { "Set-Cookie": cookie } });
  } else if (password === process.env.USER_PASSWORD!) {
    const cookie = serialize(process.env.PASSWORD_COOKIE!, "user", { httpOnly: true, path: "/" });
    return new Response("Welcome to the blog!", { status: 200, headers: { "Set-Cookie": cookie } });
  } else {
    return new Response("Incorrect Password", { status: 401 })
  }
}
