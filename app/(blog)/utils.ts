import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
/* 1. we are going to get all mdx files from the dir */
const getMdxFiles = (dir: string) => {
  return fs.readdirSync(dir).filter((file) => file.endsWith('.mdx'));
}

/* 2.then we read data form those files */
const readMdxFile = (dir: string)=>{
  let rawContent = fs.readFileSync(dir, 'utf-8');
  return matter(rawContent);
}
/* 3.then we finally present the mdxx data and metadata */
const getMdxData = (dir: string)=>{
  let mdxfiles = getMdxFiles(dir);
  return mdxfiles.map((file)=>{
    let {data: metadata, content} = readMdxFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));

    return {
      metadata,
      content,
      slug
    }
  })

}

export const getBlogPosts = ()=>{
  return getMdxData(path.join(process.cwd(), 'app', '(blog)', 'posts', 'content'));
}

/* write function to get the date */

export const formatDate = (date: string, includesRelative = true)=>{
  let currentDate = new Date(date);
  if(!date.includes('T')){
    date = `${date}T00:00:00`;
  }

  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = '';

  switch (true){
    case yearsAgo > 0:
      formattedDate = `${yearsAgo} year${yearsAgo > 1 ? 's' : ''} ago`;
      break;
    case monthsAgo > 0:
      formattedDate = `${monthsAgo} month${monthsAgo > 1 ? 's' : ''} ago`;
      break;
    case daysAgo > 0:
      formattedDate = `${daysAgo} day${daysAgo > 1 ? 's' : ''} ago`;
      break;
    default:
      formattedDate = 'Today';
  }

  let fullDate = targetDate.toLocaleString("en-US", {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  if(!includesRelative){
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;

}
