import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const words = await prisma.word.findMany();
    return NextResponse.json(words);
  } catch (error) {
    console.error("Error fetching words:", error);
    return NextResponse.json(
      { error: "Error fetching words" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { text, username } = await request.json();

    if (!text || !username) {
      return NextResponse.json(
        { error: "Text and username are required" },
        { status: 400 }
      );
    }

    const existingWord = await prisma.word.findUnique({
      where: {
        text_username: {
          text,
          username,
        },
      },
    });

    if (existingWord) {
      const updatedWord = await prisma.word.update({
        where: { id: existingWord.id },
        data: { value: existingWord.value + 1 },
      });
      return NextResponse.json(updatedWord);
    } else {
      const newWord = await prisma.word.create({
        data: { text, username, value: 1 },
      });
      return NextResponse.json(newWord);
    }
  } catch (error) {
    console.error("Error adding/updating word:", error);
    return NextResponse.json(
      { error: "Error adding/updating word" },
      { status: 500 }
    );
  }
}
