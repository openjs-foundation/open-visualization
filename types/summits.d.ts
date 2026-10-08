declare module '@/content/summits.json' {
  export type SummitItem = {
    title: string;
    status?: string;
    date: string;
    location: string;
    description: string;
    image: string;
    imageAlt: string;
    imageCaption: string;
    imageSource?: string;
    url: string;
  };

  const summits: { summits: SummitItem[] };
  export default summits;
}
