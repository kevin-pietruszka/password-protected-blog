"use server";

import { signIn, signOut } from "@/auth";

type SignInCredentials = {
  username: 'user' | 'admin',
  password: string,
}
export async function handleSignIn(credentials: SignInCredentials) {

  try {
    const { username, password } = credentials;
    const result = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    if (result?.error) {
      return { error: "Invalid credentials" };
    }

    return { success: true };
  } catch (error) {
    return { error: "An error occurred during sign in." };
  }
}

export async function handleSignOut() {
  await signOut();
}
