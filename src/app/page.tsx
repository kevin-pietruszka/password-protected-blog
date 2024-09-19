import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <h1> {"WIP"} </h1>
      <Link href="/blog">
        <Button> {"Go to blog"} </Button>
      </Link>
    </main>
  );
}
