import { Post } from "@/data/blog";
import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json(Post)
}