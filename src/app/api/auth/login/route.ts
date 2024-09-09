import { NextRequest, NextResponse } from "next/server";
import { serialize } from "cookie";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const password = body.password;

  if (password === process.env.ADMIN_PASSWORD!) {
    const cookie = serialize(process.env.PASSWORD_COOKIE!, "admin", { path: "/" });
    return NextResponse.json(
      { message: "Welcome, Isabelle!" },
      {
        status: 200,
        headers: { "Set-Cookie": cookie }
      }
    );
  } else if (password === process.env.USER_PASSWORD!) {
    const cookie = serialize(process.env.PASSWORD_COOKIE!, "user", { path: "/" });
    return NextResponse.json(
      { message: "Welcome to the blog!" },
      {
        status: 200,
        headers: { "Set-Cookie": cookie }
      }
    );
  } else {
    return NextResponse.json(
      { message: "Incorrect Password" },
      { status: 401 }
    );
  }
}
