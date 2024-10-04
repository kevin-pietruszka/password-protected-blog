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
    return {
      error: 'Failed to upload blog post. Please try again.',
    }
  }

  revalidatePath('/dashboard');
  redirect('/dashboard');
}

async function getBlogs() {

}
