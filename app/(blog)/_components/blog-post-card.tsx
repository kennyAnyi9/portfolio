import { Post } from "contentlayer/generated";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";


export default function PostCard(post: Post) {
  // Function to calculate read time (assuming post.body.raw exists)
  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  return (
    <Table>
      <TableBody>
        <TableRow className=" bg-zinc-700 bg-opacity-50 transition-colors hover:bg-zinc-600">
          <TableCell className="py-4 w-[140px]">
            <time
              dateTime={post.date}
              className="text-sm text-muted-foreground"
            >
              {new Intl.DateTimeFormat("en-US").format(new Date(post.date))}
            </time>
          </TableCell>
          <TableCell className="py-4">
            <Link
              href={post.url}
              className="font-normal text-sm "
            >
              {post.title}
            </Link>
          </TableCell>

          <TableCell className="py-4 text-right text-sm text-muted-foreground">
            {calculateReadTime(post.body.raw)} min read
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
