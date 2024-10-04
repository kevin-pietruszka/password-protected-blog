import { z } from "zod";

export type Blog = {
  title: string;
  date: Date;
  status: 'Unlisted' | 'Public';
  content: string;
}

export const ClientBlogSchema = z.object({
  title: z.string().min(1, "Title is required"),
  date: z.date(),
  status: z.enum(["Unlisted", "Public"]),
  content: z.string().promise(),
});
