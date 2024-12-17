import { Post } from "@/data/blog";
import { NextResponse } from "next/server";

export async function GET() {
     return NextResponse.json(Post)
}