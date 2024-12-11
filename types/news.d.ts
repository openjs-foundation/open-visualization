declare module '@/content/news.json' {
  export type NewsItem = {
    publication: string;
    date: string;
    title: string;
    url: string;
    image: string;
  };

  const news: NewsItem[];
  export default news;
}
