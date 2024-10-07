import { fetchBlogById } from "@/lib/data-actions";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import UpdateBlogForm from "@/components/dashboard/edit/update-blog-form";

export default async function EditBlogPage({ params }: { params: { id: string } }) {

  const id = params.id;
  const blog = await fetchBlogById(id);

  return (
    <section>
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard"> Dashboard </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage> Edit </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <UpdateBlogForm id={id} blog={blog} />
    </section>
  );
}
