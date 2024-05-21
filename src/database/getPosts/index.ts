import authors from "../authors.json";
import rawPosts from "../posts.json";

type getPostsArg = {
  limit?: number;
};
const getPosts = ({ limit = 10 }: getPostsArg) => {
  const posts = rawPosts
    .filter((_, index) => index < limit)
    .map((post) => {
      const post_author = authors.find((authors) => authors.id === post.author_id);

      if (post_author) {
        return { ...post, author: { ...post_author } };
      }
      throw new Error("Invalid author_id");
    });

  return posts;
};

export default getPosts;
