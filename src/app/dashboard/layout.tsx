import { SignOutButton } from "@/components/auth/signout-button";
import { ThemeButton } from "@/components/theme-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { HomeIcon, ArrowLeft, PlusIcon, MenuIcon } from "lucide-react";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col md:flex-row">
      <header className="md:hidden p-4 bg-primary">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary-foreground">Welcome</h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <MenuIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem asChild>
                <Link href="/dashboard" className="flex items-center gap-2">
                  <HomeIcon className="h-4 w-4" /> Home
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/create" className="flex items-center gap-2">
                  <PlusIcon className="h-4 w-4" /> Create
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/blog" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" /> Back to Blog
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex justify-between">
                <ThemeButton />
                <SignOutButton />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <aside className="h-screen w-64 sticky top-0 p-2 hidden md:block">
        <Card className="w-full h-full flex flex-col">
          <CardHeader className="bg-primary text-primary-foreground flex-none rounded-t-xl text-center">
            <h1 className="text-4xl font-bold"> Welcome </h1>
          </CardHeader>
          <CardContent className="flex-grow px-2 pt-2">
            <nav className="flex flex-col gap-2">
              <Link href="/dashboard">
                <Button variant="outline" className="w-full flex flex-row justify-start gap-2"> <HomeIcon /> Home </Button>
              </Link>
              <Link href="/dashboard/create">
                <Button variant="outline" className="w-full flex flex-row justify-start gap-2"> <PlusIcon /> Create </Button>
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
      <section className="flex-grow p-4 md:p-8">
        {children}
      </section>
    </main>
  );
}
