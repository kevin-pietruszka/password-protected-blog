"use server";

import { kv } from "@vercel/kv";
import { revalidatePath } from "next/cache";
import { redirect } from 'next/navigation';
import { Blog } from "./definitions";

export async function createBlog(blog: Blog) {

  try {
    await kv.json.set("blogs", `$.${blog.id}`, blog)
  } catch (error) {
    console.error('Error uploading blog post:', error)
    throw new Error("Failed to fetch upload blog.")
  }
  revalidatePath('/dashboard');
  revalidatePath('/blog');
  redirect('/dashboard');
}

export async function updateBlog(id: string, blog: Blog) {
  try {
    if (id !== blog.id) {
      // The title was changed so it needs to remove the old id
      await kv.json.del("blogs", `$.${id}`)
    }
    await kv.json.set("blogs", `$.${blog.id}`, blog)
  } catch (error) {
    console.error('Error uploading blog post: ', error);
    throw new Error("Failed to update blog with id " + blog.id);
  }
  revalidatePath(`/dashboard/edit/${id}`);
  revalidatePath(`/dashboard/edit/${blog.id}`);
  revalidatePath('/dashboard');
  revalidatePath('/blog');
  redirect('/dashboard');
}

export async function publishBlog(id: string) {
  try {
    await kv.json.set("blogs", `$.${id}.status`, JSON.stringify("Public"))
  } catch (error) {
    console.error('Error publishing blog ', error);
    throw new Error("Failed to publish blog");
  }
  revalidatePath('/dashboard');
  revalidatePath('/blog');
  redirect('/dashboard');
}

export async function unlistBlog(id: string) {
  try {
    await kv.json.set("blogs", `$.${id}.status`, JSON.stringify("Unlisted"))
  } catch (error) {
    console.error('Error unlisted blog ', error);
    throw new Error("Failed to unlist blog");
  }
  revalidatePath('/dashboard');
  revalidatePath('/blog');
  redirect('/dashboard');
}

export async function deleteBlogById(id: string) {
  try {
    await kv.json.del("blogs", `$.${id}`)
  } catch (error) {
    console.error('Error deleting blog post: error');
    throw new Error("Failed to delete blog post")
  }
  revalidatePath('/dashboard');
  revalidatePath('/blog');
  redirect('/dashboard');
}

export async function fetchBlogById(id: string) {
  try {
    const blog = await kv.json.get<Blog>("blogs", `$.${id}`);
    if (Array.isArray(blog) && blog.length === 1) {
      return blog[0];
    }
  } catch (error) {
    console.error("Error getting blog with id:", id);
    throw new Error("Failed to fetch blog.")
  }
}

export async function fetchBlogs() {
  try {
    const blogs = await kv.json.get<Blog[]>("blogs", "$.*");
    if (!blogs || blogs.length === 0) {
      return [];
    }
    return blogs
  } catch (error) {
    console.error("Error getting blogs");
    throw new Error("Failed to fetch blogs.")
  }
}

export async function fetchPublicBlogMetadata() {
  try {
    const publicBlogs = await kv.json.get<Blog[]>("blogs", "$[?(@.status=='Public')]");

    if (!publicBlogs || publicBlogs.length === 0) {
      return [];
    }

    const metadata = publicBlogs.map(blog => ({
      id: blog.id,
      title: blog.title,
      date: blog.date
    }));

    metadata.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return metadata;

  } catch (error) {
    console.error("Error fetching public blog metadata:", error);
    throw new Error("Failed to fetch public blog metadata.");
  }
}
