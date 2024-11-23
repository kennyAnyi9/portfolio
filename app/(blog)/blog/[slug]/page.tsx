import { allPosts } from "contentlayer/generated"
import { notFound } from "next/navigation"
import { useMDXComponent } from "next-contentlayer/hooks"
import { format } from "date-fns"
import { Badge } from "@/components/ui/badge"

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
    <article className="mx-auto py-8 ">
      <div className="mb-8 text-center">
        <Badge  className="bg-zinc-700 mb-2  opacity-50 transition-colors hover:bg-zinc-600">
        <time dateTime={post.date} className="text-xs text-white my-auto">
          {format(new Date(post.date), 'MMMM d, yyyy')}
        </time>
        </Badge>
        <h1 className="text-3xl font-bold ">{post.title}</h1>

      </div>
      <div className="prose prose-invert mx-auto">
        <MDXContent />
      </div>
    </article>
  )
}
