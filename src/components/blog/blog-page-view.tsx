import { Blog } from "@/lib/definitions";
import { format } from "date-fns";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/shadcn/style.css";
import BlockRenderer from "./block-renderer";

export default function BlogPageView({blog}:{blog: Blog}) {
  return (
    <article>
      <h1 className="text-4xl font-bold"> {blog.title} </h1>
      <p> {format(blog.date, "PPP")}</p>
      <div className="bn-container bn-shadcn">
        <BlockRenderer blocks={blog.content} />
      </div>
    </article>
  );
}
