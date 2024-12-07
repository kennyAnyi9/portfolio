import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Mdx } from "@/mdx-components";
import { Book, BookOpenCheck } from "lucide-react";

interface PostProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    return null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <div>
        <article className="py-6 prose dark:prose-invert">
          <div className="mb-10">
          <div className="flex gap-x-2 w-fit px-2 py-1 mb-4 rounded-full bg-accent">
              <p className="text-xs my-auto text-grey-700 dark:text-grey-200">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}

              </p>
              <p className="text-xs my-auto text-grey-700 dark:text-grey-200">
                •
              </p>

              <p className="text-xs my-auto text-grey-700 dark:text-grey-200">
                {post.readTimeMinutes}
              </p>
              <BookOpenCheck className="size-3 my-auto" />
            </div>
            <div className="flex gap-2">
              <h1 className="mb-2 text-3xl">{post.title}</h1>
            </div>


          </div>
          <Mdx code={post.body.code} />
        </article>
     </div>
  );
}
