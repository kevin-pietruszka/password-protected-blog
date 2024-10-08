import Link from 'next/link';
import { format } from 'date-fns';

type BlogMetadata = {
  id: string;
  title: string;
  date: Date;
};

type BlogListProps = {
  blogs: BlogMetadata[];
};

export default function BlogList({ blogs }: BlogListProps) {
  return (
    <div className="space-y-4">
      {blogs.map((blog) => (
        <div key={blog.id}>
          <Link href={`/blog/${blog.id}`} className="hover:underline">
            <h1 className="font-bold text-2xl">
              {blog.title}
            </h1>
          </Link>
          <p className="text-sm text-muted-foreground">{format(blog.date, "PPP")}</p>
        </div>
      ))}
    </div>
  );
}
