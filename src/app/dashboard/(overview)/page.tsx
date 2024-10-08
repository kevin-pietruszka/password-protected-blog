import { BlogTable } from "@/components/dashboard/blog-table";
import { columns } from "@/components/dashboard/blog-columns";
import { fetchBlogs } from "@/lib/data-actions";

export default async function DashoardPage() {
  const blogs = await fetchBlogs();
  return (
    <>
      <h1 className="text-2xl"> Dashboard </h1>
      <BlogTable columns={columns} data={blogs} />
    </>
  );
}
