import Head from 'next/head';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Life Sciencify - Blog</title>
        <script src="/js/script.js"></script>
      </Head>
    </div>
  );
}
