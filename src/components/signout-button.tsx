"use client";

import { handleSignOut } from "@/app/actions/auth-actions";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function SignOutButton() {
  const router = useRouter();

  async function click() {
    await handleSignOut();
    router.push("/");
  }
  return (
    <Button onClick={() => click()} variant="outline">
      Sign Out
    </Button>
  );
}
