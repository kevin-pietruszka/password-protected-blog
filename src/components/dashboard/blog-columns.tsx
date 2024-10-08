"use client"

import { Blog } from "@/lib/definitions"
import { ColumnDef } from "@tanstack/react-table"
import { format } from "date-fns"
import { MoreHorizontal, ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { deleteBlogById, publishBlog, unlistBlog } from "@/lib/data-actions"

export const columns: ColumnDef<Blog>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      return format(row.getValue("date"), "PPP");
    },
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const blog = row.original
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href={`/dashboard/edit/${blog.id}`}>
              <DropdownMenuItem>
                Edit
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem disabled={blog.status === "Public"} onClick={() => { publishBlog(blog.id) }}>
              {"Publish"}
            </DropdownMenuItem>
            <DropdownMenuItem disabled={blog.status==="Unlisted"} onClick={() => { unlistBlog(blog.id) }}>
              {"Unlist"}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => { deleteBlogById(blog.id) }}>
              {"Delete"}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

