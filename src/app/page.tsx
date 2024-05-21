import React from "react";
import Card from "@/components/posts/Card";
import getPosts from "@/database/getPosts";
import getCurrentTimeZone from "@/utils/getCurrentTimeZone";

const IndexPage = () => {
  const timeZone = getCurrentTimeZone();
  const posts = getPosts({ limit: 8 });

  return (
    <div>
      <h1>MAQE Forum</h1>
      <p>Your current timezone is : {timeZone}</p>
      {posts.map((post, index) => (
        <Card key={post.id} post={post} index={index} />
      ))}
    </div>
  );
};

export default IndexPage;
