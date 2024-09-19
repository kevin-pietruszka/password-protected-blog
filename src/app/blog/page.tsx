import { SignOutButton } from "@/components/signout-button";
import { ThemeButton } from "@/components/theme-button";

export default function Blog() {
  return (
    <>
      <header className="flex justify-between items-center max-w-6xl mx-auto px-4 py-8">
        <h1 className="font-bold text-4xl"> {"Isabelle's Blog"} </h1>
        <nav className="flex items-center justify-center gap-2"> 
          <ThemeButton />
          <SignOutButton />
        </nav>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold">
          {"Posts"}
        </h2>
      </main>
    </>
  );
}
