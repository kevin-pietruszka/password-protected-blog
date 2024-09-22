import { SignOutButton } from "@/components/signout-button";
import { ThemeButton } from "@/components/theme-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { HomeIcon, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <aside className="w-full hidden flex-none md:block md:w-64 p-2">
        <Card className="w-full h-full flex flex-col">
          <CardHeader className="bg-primary flex-none rounded-t-xl text-center">
            <h1 className="text-4xl font-bold"> Welcome </h1>
          </CardHeader>
          <CardContent className="flex-grow px-2 pt-2">
            <nav className="flex flex-col gap-2">
              <Link href="/dashboard">
                <Button variant="outline" className="w-full flex flex-row justify-start gap-2"> <HomeIcon /> Home </Button>
              </Link>
              <Link href="/blog">
                <Button variant="outline" className="w-full flex flex-row justify-start gap-2"> <ArrowLeft /> Back to Blog </Button>
              </Link>
            </nav>
          </CardContent>
          <CardFooter className="flex-none flex justify-between items-center">
            <ThemeButton />
            <SignOutButton />
          </CardFooter>
        </Card>
      </aside>
      <section className="flex-grow p-8">
        {children}
      </section>
    </main>
  );
}
