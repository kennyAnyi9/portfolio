import prisma from "@/lib/prisma"; // Adjust this import based on your project structure
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const words = await prisma.word.findMany();
    return NextResponse.json(words);
  } catch (error) {
    console.error("Error in GET /api/words:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { text, username } = await request.json();
    const result = await prisma.word.create({
      data: { text, username },
    });
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error in POST /api/words:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
