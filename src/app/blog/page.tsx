import BlogList from "@/components/blog/blog-list";
import { fetchPublicBlogMetadata } from "@/lib/data-actions";
import { Separator } from "@/components/ui/separator";

export default async function Blog() {

  const blogMetadata = await fetchPublicBlogMetadata();

  return (
    <>
      <h2 className="text-4xl font-bold">
        {"Posts"}
      </h2>
      <Separator className="mb-4" />
      <BlogList blogs={blogMetadata} />
    </>
  );
}
