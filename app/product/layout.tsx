import Link from "next/link";
import { CircleUser, Dog } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";

function Dashboard({ content }: { content: React.ReactElement }) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Dog className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Link
            href="/product?type=database"
            className="text-foreground transition-colors hover:text-foreground"
          >
            Database
          </Link>
          <Link
            href="/product?type=ui"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            UI
          </Link>
        </nav>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 ">
            {/* <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div> */}
          </form>
          <ModeToggle />
          <CircleUser className="h-6 w-6" />
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        {content}
      </main>
    </div>
  );
}

export default Dashboard;
