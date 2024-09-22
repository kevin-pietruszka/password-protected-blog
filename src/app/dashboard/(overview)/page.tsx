import BlogTable from "@/components/blog-table";
import CreateBlog from "@/components/create-blog";
import SearchComponent from "@/components/search";

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

  console.log(query)

  return (
    <>
      <h1 className="text-2xl"> Dashboard </h1>
      <div className="flex items-center gap-2 my-4">
        <SearchComponent placeholder="Lookup blogs" />
        <CreateBlog />
      </div>
      <BlogTable />
    </>
  );
}
