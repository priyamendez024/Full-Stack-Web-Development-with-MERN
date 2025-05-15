import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>MERN App - Home</title>
        <meta name="description" content="A MERN app with SSR and SEO" />
        <meta property="og:title" content="MERN App" />
      </Head>
      <h1>Welcome to MERN SSR</h1>
    </>
  );
}