import DashboardButton from "@/components/dashboard/dashboard-button";
import { SignOutButton } from "@/components/auth/signout-button";
import { ThemeButton } from "@/components/theme-button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <header className="flex justify-between items-center max-w-6xl mx-auto px-4 py-8">
        <h1 className="font-bold text-4xl"> {"Isabelle's Blog"} </h1>
        <nav className="flex items-center justify-center gap-2">
          <div className="hidden md:flex items-center gap-2">
            <DashboardButton />
            <ThemeButton />
            <SignOutButton />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger className="md:hidden">
              <Menu className="h-6 w-6" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <DashboardButton />
              </DropdownMenuItem>
              <DropdownMenuItem className="flex gap-1 justify-between">
                <ThemeButton />
                <SignOutButton />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </header>
      <section className="max-w-6xl mx-auto px-4">
        {children}
      </section>
    </main>
  );
}
