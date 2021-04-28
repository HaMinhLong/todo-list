import axios from "axios";
import Layout from "../../components/Layout";
import Head from "next/head";
import Link from "next/link";

import styles from "../../styles/TodoList.module.css";

export const getStaticProps = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/comments"
  );

  return {
    props: { data },
  };
};

const TodoList = ({ data }) => {
  return (
    <Layout>
      <Head>
        <title>Todo List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>All TodoList</h1>
      {!data ? (
        <p>Loading...</p>
      ) : (
        data &&
        data.length > 0 &&
        data.map((dt) => (
          <div key={dt.id}>
            <Link href={`/todo-list/${dt.id}`}>
              <p className={styles.single}>{dt.name}</p>
            </Link>
          </div>
        ))
      )}
    </Layout>
  );
};

export default TodoList;
