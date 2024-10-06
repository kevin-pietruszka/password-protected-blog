"use server";

import { kv } from "@vercel/kv";
import { revalidatePath } from "next/cache";
import { redirect } from 'next/navigation';
import { Blog } from "./definitions";

export async function createBlog(blogData: Blog) {

  try {

    const blogId = "1"
    await kv.set(`blog:${blogId}`, blogData)

  } catch (error) {
    console.error('Error uploading blog post:', error)
    throw new Error("Failed to fetch upload blog.")
  }

  revalidatePath('/dashboard');
  redirect('/dashboard');
}

export async function updateBlog(blogData: Blog) {

}

export async function fetchBlogById(id: string) {
  try {
    const blog = await kv.get(`blog:${id}`);
    return blog as Blog;
  } catch (error) {
    console.error("Error getting blog with id:", id);
    throw new Error("Failed to fetch blog.")
  }
}
