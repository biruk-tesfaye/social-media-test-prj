import Home from "../src/components/home/home";
import Layout from "../src/components/_shared/Layout/layout";
import fetch from "isomorphic-unfetch";

export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: any;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
export type HomeType = {
  users: UserType[];
};

export default function HomePage({ users }: HomeType) {
  return (
    <Layout>
      <Home users={users} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/users`
  ).then((res) => res.json());

  return {
    props: {
      users: data,
    },
  };
};
