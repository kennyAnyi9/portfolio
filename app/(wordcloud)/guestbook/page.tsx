"use client";

import dynamic from "next/dynamic";
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
import WordForm from "../_components/word-form";

const WordCloudComponent = dynamic(() => import("../_components/word-cloud"), {
  ssr: false,
  loading: () => <p>Loading Word Cloud...</p>,
});

interface WordData {
  text: string;
  value: number;
  username: string;
}

export default function Home() {
  const [words, setWords] = useState<WordData[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsMounted(true);
    fetchWords();
  }, []);

  const fetchWords = async () => {
    try {
      const response = await fetch("/api/words");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setWords(data);
    } catch (error) {
      console.error("Error fetching words:", error);
      setError("Failed to fetch words. Please try again later.");
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
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setIsOpen(false);
      fetchWords();
    } catch (error) {
      console.error("Error adding word:", error);
      setError("Failed to add word. Please try again later.");
    }
  };

  return (
    <main className="flex min-h-screen flex-col text-white">
      <BackButton />
      <h1 className="text-2xl font-normal mb-8">Feature in my Word Cloud</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

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

      {isMounted && words.length > 0 && (
        <div className="mt-8 w-full">
          <WordCloudComponent words={words} />
        </div>
      )}

      {isMounted && words.length === 0 && !error && (
        <p>No words available. Be the first to add one!</p>
      )}
    </main>
  );
}
