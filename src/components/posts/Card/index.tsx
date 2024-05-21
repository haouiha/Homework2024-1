"use client";

import dayjs from "dayjs";
import React from "react";
import { Post } from "@/types/post";
import {
  AuthorName,
  Avatar,
  BottomSection,
  CardBox,
  Divider,
  PostBody,
  PostContent,
  PostDate,
  PostImage,
  PostTitle,
  TopSection,
} from "./styled";

type CardProps = {
  post: Post;
  index: number;
};

const Card: React.FC<CardProps> = ({ post, index }) => {
  return (
    <CardBox variant={index % 2 ? "even" : "odd"}>
      <TopSection>
        <Avatar alt={`avartar ${post.author_id}`} src={post.author.avatar_url} />
        <AuthorName>{post.author.name}</AuthorName>
        <PostDate>{dayjs(post.created_at).format("[posted on] dddd, MMMM, D, YYYY, HH:mm")}</PostDate>
      </TopSection>
      <Divider />

      <BottomSection>
        <PostImage alt={`postIamge ${post.id}`} src={post.image_url} />
        <PostContent>
          <PostTitle>{post.title}</PostTitle>
          <PostBody>{post.body}</PostBody>
        </PostContent>
      </BottomSection>
    </CardBox>
  );
};

export default Card;
