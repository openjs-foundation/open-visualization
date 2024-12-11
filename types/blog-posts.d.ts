declare module '@/content/blog.json' {
  export type BlogPost = {
    date: string;
    title: string;
    blurb: string;
    url: string;
    image: string;
  };

  const blogPosts: BlogPost[];
  export default blogPosts;
}
