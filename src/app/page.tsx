import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { ThemeButton } from "@/components/theme-button"

export default function Home() {
  return (
    <>
      <header className="max-w-6xl mx-auto px-4 py-8 flex items-center justify-between border-b">
        <Link className="flex items-center justify-center" href="/">
          <span className="font-bold text-4xl"> {"Isabelle\'s Blog"}</span>
        </Link>
        <NavigationMenu className="hidden md:flex ml-auto">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <Button variant="outline">
                  Blog
                </Button>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <ThemeButton />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="md:hidden ml-auto" size="icon" variant="outline">
              <Menu className="h-6 w-6"/>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4">
              <Link className="hover:underline underline-offset-4" href="/blog">
                Blog
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex-1 max-w-6xl mx-auto">
        <section className="w-full py-12 md:py-24 flex flex-col items-center space-y-4 text-center">
          <div className="relative w-full max-w-3xl aspect-[16/9]">
            <Image
              src="/isabelle.jpg"
              alt="Hero Image"
              className="rounded-lg object-cover"
              fill
              priority
            />
          </div>
          <h1 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Welcome to My Personal Blog
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Sharing my experiences while I go through UC Berkeley Law.
          </p>
          <Link href="/blog">
            <Button>
              To Blog
            </Button>
          </Link>
        </section>
      </main>
    </>
  )
}
