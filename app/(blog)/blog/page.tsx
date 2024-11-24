import { allPosts } from "contentlayer/generated";
import { ArrowLeft, Book, Rss} from "lucide-react";
import Link from "next/link";
import React from "react";
import { formatDate, getBlogPosts } from "../utils";
import { Button } from "@/components/ui/button";
import PostCard from "../_components/blog-post-card";

const Blog = () => {
  const posts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return (
    <div className="flex flex-col min-h-screen gap-10 mt-[3rem]">

      <div className="flex flex-col gap-8">
        <div className="flex justify-between flex-row">
        <h1 className="text-2xl inline-flex gap-2 font-bold my-auto"><Book className="my-auto" size={"24"} />Blog</h1>
        <Button variant={"outline"} size={"sm"}><Rss size={16} /></Button>
        </div>

        {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
      </div>

    </div>
  );
};

export default Blog;
