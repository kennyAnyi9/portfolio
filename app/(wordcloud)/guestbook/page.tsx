"use client";

import { useEffect, useState } from "react";

import BackButton from "@/components/ken-ui/back-button";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import WordCloudComponent from "../_components/word-cloud";
import WordForm from "../_components/word-form";

interface WordData {
  text: string;
  value: number;
  username: string;
}

export default function Home() {
  const [words, setWords] = useState<WordData[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetchWords();
  }, []);

  const fetchWords = async () => {
    try {
      const response = await fetch("/api/words");
      const data = await response.json();
      setWords(data);
    } catch (error) {
      console.error("Error fetching words:", error);
    }
  };

  const handleSubmit = async (data: { text: string; username: string }) => {
    try {
      const response = await fetch("/api/words", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to add word");
      }

      setIsOpen(false);
      fetchWords();
    } catch (error) {
      console.error("Error adding word:", error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col text-white">
      <BackButton />
      <h1 className="text-2xl font-normal mb-8">Feature in my Word Cloud</h1>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="secondary" className="w-fit ">
            Add Your Word
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-[#191919] text-white">
          <DialogHeader>
            <DialogTitle>Add a New Word</DialogTitle>
          </DialogHeader>
          <WordForm onSubmit={handleSubmit} />
        </DialogContent>
      </Dialog>

      <div className="mt-8 w-full">
        <WordCloudComponent words={words} />
      </div>
    </main>
  );
}
