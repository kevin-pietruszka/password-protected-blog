import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableCell, TableBody } from "@/components/ui/table";
import { Pen, Trash } from "lucide-react";
import Link from "next/link";

export default function BlogTable() {
  const blogs = [
    { blogId: 1, blogTitle: "Intro to React", blogDate: "2023-09-10" },
    { blogId: 2, blogTitle: "Advanced TypeScript", blogDate: "2023-09-12" },
    { blogId: 3, blogTitle: "Understanding CSS Grid", blogDate: "2023-09-14" },
  ];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Blog Id</TableHead>
          <TableHead>Blog Title</TableHead>
          <TableHead>Blog Date</TableHead>
          <TableHead> </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {blogs.map((blog) => (
          <TableRow key={blog.blogId}>
            <TableCell>{blog.blogId}</TableCell>
            <TableCell>{blog.blogTitle}</TableCell>
            <TableCell>{blog.blogDate}</TableCell>
            <TableCell className="text-right">
              <Button variant="outline" size="sm" className="mr-2">
                <Link href={`/edit/${blog.blogId}`}>
                  <Pen />
                </Link>
              </Button>
              <Button variant="destructive" size="sm">
                <Trash />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

