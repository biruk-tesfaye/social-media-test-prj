import Layout from "../../src/components/_shared/Layout/layout";
import fetch from "isomorphic-unfetch";
import { UserType } from "..";
import { GetStaticPaths, GetStaticProps } from "next";
import UserDetail from "../../src/components/user-detail/user-detail";

export type DetailType = {
  user: UserType;
  posts: PostType[];
  comments: CommentType[];
  user_comments: CommentType[];
  mostCommented: {post:PostType,length:number};
  leastCommented: {post:PostType,length:number};
};

export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type CommentType = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export default function UserDetailPage({
  user,
  posts,
  comments,
  user_comments,
  leastCommented,
  mostCommented,
}: DetailType) {
  return (
    <Layout>
      <UserDetail
        user_comments={user_comments}
        comments={comments}
        user={user}
        posts={posts}
        leastCommented={leastCommented}
        mostCommented={mostCommented}
      />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const users = await fetch(
    `https://jsonplaceholder.typicode.com/users`
  ).then((res) => res.json());

  return {
    paths: users.map((user: UserType) => ({
      params: { id: user.id.toString() },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const user: UserType = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params?.id}`
  ).then((res) => res.json());

  const posts = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${params?.id}`
  ).then((res) => res.json());

  const user_comments = await fetch(
    `https://jsonplaceholder.typicode.com/comments?email=${user.email}`
  ).then((res) => res.json());

  const comments = await fetch(
    `https://jsonplaceholder.typicode.com/comments`
  ).then((res) => res.json());

  let topPost = {
    post: {},
    length: 0,
  };

  await posts.forEach((post: PostType) => {
    let comment = comments.filter(
      (comment: CommentType) => comment.postId === post.id
    );
    if (comment.length > topPost.length) {
      topPost.length = comment.length;
      topPost.post = post;
    }
  });

  let bottomPost = {
    post: topPost.post,
    length: topPost.length,
  };
  await posts.forEach((post: PostType) => {
    let comment = comments.filter(
      (comment: CommentType) => comment.postId === post.id
    );
    if (comment.length < bottomPost.length) {
      console.log("loogeededed");
      bottomPost.length = comment.length;
      bottomPost.post = post;
    }
  });

  console.log(topPost, bottomPost);

  return {
    props: {
      user: user,
      posts: posts,
      user_comments,
      comments,
      mostCommented: topPost,
      leastCommented: bottomPost,
    },
  };
};
