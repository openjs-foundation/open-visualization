declare module '@/content/summits.json' {
  export type SummitItem = {
    title: string;
    date: string;
    location: string;
    description: string;
    image: string;
    url: string;
  };

  const summits: { summits: SummitItem[] };
  export default summits;
}
