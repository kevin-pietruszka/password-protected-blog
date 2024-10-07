import Link from "next/link";
import { Button } from "@/components/ui/button";
import { auth } from "@/auth";

export default async function DashboardButton() {
  const session = await auth();

  if (session?.user?.name === "admin") {
    return (
      <Link href="/dashboard">
        <Button>Dashboard</Button>
      </Link>
    );
  }
  return <></>;
}
