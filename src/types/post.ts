export type Author = {
  id: number;
  name: string;
  role: string;
  place: string;
  avatar_url: string;
};

export type Post = {
  id: number;
  author_id: number;
  title: string;
  body: string;
  image_url: string;
  created_at: string;
  author: Author;
};
