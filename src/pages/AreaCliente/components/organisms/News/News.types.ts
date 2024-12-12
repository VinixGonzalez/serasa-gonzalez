export interface News {
  img: React.ReactNode;
  description: string;
}

export interface NewsProps {
  newsList: Array<News>;
}
