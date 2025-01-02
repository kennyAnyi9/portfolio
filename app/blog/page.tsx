import { allPosts } from "@/.contentlayer/generated";
import { formatter } from "@/lib/utils";
import { Book, Rss } from "lucide-react";
import Link from "next/link";
import React from "react";

const BlogPage = () => {
    const posts = allPosts.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    if (posts.length === 0) {
        return null;
    }

    return (
        <div className="space-y-2 min-h-screen">
            <div className="inline-flex gap-2 mb-4">
            <Rss className="size-6 my-auto"/>
            <h1 className="font-bold text-2xl">Blog</h1>

            </div>
            {posts.map((post) => (
                <Link
                    key={post.slug}
                    href={post.slug}
                    className="block group"
                >
                    <div className="flex items-center border-l-4 border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 pl-4 py-2 transition-colors">
                        <div className="flex-grow">
                            <h3 className="font-medium text-neutral-800 dark:text-neutral-200 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                                {post.title}
                            </h3>
                        </div>
                        <time className="font-medium tracking-wider text-sm text-neutral-500 dark:text-neutral-400 ml-4">
                            {formatter.date(new Date(post.date))}
                        </time>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default BlogPage;
