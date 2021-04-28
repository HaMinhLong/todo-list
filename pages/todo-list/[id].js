import Layout from "../../components/Layout";
import Head from "next/head";

import axios from "axios";

export const getStaticPaths = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/comments"
  );

  const paths = data.map((dt) => {
    return {
      params: { id: dt.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/comments/${id}`
  );

  return {
    props: {
      data,
    },
  };
};

const DetailsPage = ({ data }) => {
  return (
    <Layout>
      <Head>
        <title>Todo List | {data.name}</title>
      </Head>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>Website: {data.body}</p>
    </Layout>
  );
};

export default DetailsPage;
