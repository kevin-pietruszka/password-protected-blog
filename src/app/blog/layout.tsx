import DashboardButton from "@/components/dashboard/dashboard-button";
import { SignOutButton } from "@/components/auth/signout-button";
import { ThemeButton } from "@/components/theme-button";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <header className="flex justify-between items-center max-w-6xl mx-auto px-4 py-8">
        <h1 className="font-bold text-4xl"> {"Isabelle's Blog"} </h1>
        <nav className="flex items-center justify-center gap-2">
          <DashboardButton />
          <ThemeButton />
          <SignOutButton />
        </nav>
      </header>
      <section className="max-w-6xl mx-auto px-4">
        {children}
      </section>
    </main>
  );
}
