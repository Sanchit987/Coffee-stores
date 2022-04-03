import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Banner from '../components/banner';

export default function Home() {
  const handleOnBannerClick = () => {
    console.log("Hi banner Btn");
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name="description" content="This website helps to find and upvote to different coffe shops" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner buttonText="View Stores Nearby" handleOnClick={handleOnBannerClick} />
        <div className={styles.heroImage}>
          <Image src="/static/hero-image.png" alt="cover" width={700} height={400} />
        </div>
      </main>
    </div>
  );
}
