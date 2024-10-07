import BlogTable from "@/components/dashboard/blog-table";
import SearchComponent from "@/components/dashboard/search";
import BlogPagination from "@/components/dashboard/blog-pagination";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlusIcon } from "lucide-react";

export default async function DashBoard({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {

  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = 10;

  return (
    <>
      <h1 className="text-2xl"> Dashboard </h1>
      <div className="flex items-center gap-2 my-4">
        <SearchComponent placeholder="Lookup blogs" />
        <Link href="/dashboard/create">
          <Button className="flex gap-2">
            Create Blog
            <PlusIcon />
          </Button>
        </Link>
      </div>
      <BlogTable query={query} currentPage={currentPage} />
      <BlogPagination totalPages={totalPages} />
    </>
  );
}
