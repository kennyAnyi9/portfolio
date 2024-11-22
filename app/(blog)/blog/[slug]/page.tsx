
import { getBlogPosts } from "../../utils"

const BlogDetailPage = ({params}:{params:{category:string, slug:string}}) =>{
    const blogPost = getBlogPosts().find((post)=>post.slug === params.slug)
    console.log(blogPost)
    return (
        <div>
          <h1>{blogPost?.metadata.title}</h1>
        </div>
    )
}

export default BlogDetailPage
