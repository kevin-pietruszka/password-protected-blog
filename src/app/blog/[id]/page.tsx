import BlogPageView from "@/components/blog/blog-page-view";
import { fetchBlogById } from "@/lib/data-actions";

export default async function Blog({ params }: { params: { id: string } }) {
  const blog = await fetchBlogById(params.id)
  return (
    <BlogPageView blog={blog} />
  );
}
