import Link from "next/link";
import { CircleUser, Dog, Search } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import SearchInput from "./components/SearchInput";
import { useParams, useSearchParams } from "next/navigation";

function Dashboard(props: { content: React.ReactElement }) {
  const { content } = props;
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 z-50">
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
            className="transition-colors hover:text-primary"
          >
            Database
          </Link>
          <Link
            href="/product?type=design"
            className="text-muted-primary transition-colors hover:text-primary"
          >
            Design
          </Link>
        </nav>
        <div className="flex w-full items-center gap-4 justify-end">
          <SearchInput />
          <ModeToggle />
          {/* <CircleUser className="h-6 w-6" /> */}
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        {content}
      </main>
    </div>
  );
}

export default Dashboard;
