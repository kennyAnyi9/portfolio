import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import Link from 'next/link';

export default async function Blog() {
  const sortedPosts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <>
      <h1>Blog posts</h1>
      <div>
        {sortedPosts.map((post) => (
           <div className="mb-8">
           <h2 className="mb-1 text-xl">
             <Link
               href={post.url}
               className=""
             >
               {post.title}
             </Link>
           </h2>
           <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
             {new Intl.DateTimeFormat("en-US").format(new Date(post.date))}
           </time>
         </div>
        ))}
      </div>
    </>
  );
}
