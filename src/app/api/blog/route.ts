import { NextResponse } from "next/server";
import { getAllBlogPosts, getBlogCategories } from "@/lib/blog";

export async function GET() {
  const posts = getAllBlogPosts();
  const categories = getBlogCategories();

  return NextResponse.json({
    posts,
    categories,
  });
}
