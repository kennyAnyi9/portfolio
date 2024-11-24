import { Badge } from "@/components/ui/badge"
import { allPosts } from "contentlayer/generated"
import { format } from "date-fns"
import { useMDXComponent } from "next-contentlayer/hooks"
import { notFound } from "next/navigation"
import { calculateReadTime } from "../../_components/blog-post-card"
import { BookOpenCheck } from "lucide-react"

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post.slug }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post.slug === params.slug)
  if (!post) notFound()
  return { title: post.title }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.slug === params.slug)
  if (!post) notFound()

  const MDXContent = useMDXComponent(post.body.code)

  return (
    <article className="w-full mt-[3rem]">
      <div className="mb-8">
        <Badge  className="bg-zinc-700 mb-2  opacity-50 transition-colors hover:bg-zinc-600">
        <time dateTime={post.date} className="text-xs font-extralight text-white my-auto inline-flex gap-2">
         {format(new Date(post.date), 'MMMM d, yyyy')} <span className=""> . </span>{calculateReadTime(post.body.raw)} min read <BookOpenCheck size={"12"} className="my-auto" />
        </time>
        </Badge>
        <h1 className="text-3xl mt-2 font-bold">{post.title}</h1>

      </div>
      <div className="prose dark:prose-invert  mt-20">
        <MDXContent />
      </div>
    </article>
  )
}
