import { ArrowLeft, Rss} from "lucide-react";
import Link from "next/link";
import React from "react";
import { formatDate, getBlogPosts } from "../utils";
import { Button } from "@/components/ui/button";

const Blog = ({params}:{params:{slug:string}}) => {
    const allPosts = getBlogPosts();

    const sortedPosts = allPosts.sort((a,b)=>a.metadata.publishedAt - b.metadata.publishedAt);

  return (
    <div className="flex flex-col min-h-screen gap-10">
      <Link href={"/"} className="">
        <span className="flex gap-2 hover:underline underline-offset-2">
        <ArrowLeft size={16} className="my-auto" /><h1 className="my-auto text-sm">back</h1>
        </span>
      </Link>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between flex-row">
        <h1 className="text-2xl inline-flex gap-2">Blog</h1>
        <Button variant={"outline"} size={"sm"}><Rss size={16} /></Button>
        </div>

        {sortedPosts.map((post)=>(
            <div key={post.slug} className="flex flex-col lg:flex-row lg:justify-between">
                <div className="space-y-10">
                    <p className="text-sm text-muted-foreground tracking-tight">{formatDate(post.metadata.publishedAt)}</p>
                </div><a href=""></a>
                <div className="lg:w-2/3 lg:justify-end space-y-5">

                   <Link href={`/blog/${post.slug}`}>
                     <h1 className="font-normal text-lg hover:underline">{post.metadata.title}</h1>
                   </Link>
                    <p className="text-sm opacity-70 line-clamp-3">{post.metadata.summary}</p>
                </div>


            </div>
        ))}
      </div>

    </div>
  );
};

export default Blog;
