import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <div className={styles.container}>
        <Head>
          <title>Todo List | Home</title>
          <meta name="keywords" content="todo list" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>Homepage</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ullam
          cum accusamus, amet sed eius cupiditate velit minus voluptas aliquid
          adipisci qui perferendis quos nulla! Facilis ducimus labore neque
          veniam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ratione?
          Distinctio temporibus eum rerum nemo error excepturi ex in dicta
          natus? Cum repudiandae quas incidunt deleniti, alias quibusdam quidem
          libero?
        </p>
        <Link href="/todo-list">
          <button>See Todo List</button>
        </Link>
      </div>
    </Layout>
  );
}
